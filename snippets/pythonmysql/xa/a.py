import pymysql

def OpenConnection(n_port=3306):
    return pymysql.connect(host='localhost',
                        port=n_port,
                        user='iamslash',
                        password='12345678',
                        db='test',
                        charset='utf8mb4',
                        cursorclass=pymysql.cursors.DictCursor)   

def Foo(c):
    try:
        with c.cursor() as cursor:
            # Create a new record
            sql = "INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)"
            cursor.execute(sql, ('webmaster@python.org', 'very-secret'))

        # connection is not autocommit by default. So you must commit to save
        # your changes.
        c.commit()

        with c.cursor() as cursor:
            # Read a single record
            sql = "SELECT `id`, `password` FROM `users` WHERE `email`=%s"
            cursor.execute(sql, ('webmaster@python.org',))
            result = cursor.fetchone()
            print(result)
    except Exception as e:
        print("ERR: exception " + e.value)
    finally:
        c.close()

def Bar(c, xa_id):
    """
    one phase commit exapmle using XA
    """
    try:
        with c.cursor() as cursor:
            cursor.execute("XA START %s", (xa_id))
            # Create a new record
            sql = "INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)"
            cursor.execute(sql, ('webmaster@python.org', 'very-secret'))          
            cursor.execute("XA END %s", (xa_id))
            cursor.execute("XA PREPARE %s", (xa_id))
            cursor.execute("XA RECOVER")
            result = cursor.fetchone()
            print(result)
            cursor.execute("XA COMMIT %s", (xa_id))
            #cursor.execute("XA ROLLBACK %s", (xa_id))
    except Exception as e:
        print("ERR: exception " + e)
    finally:
        c.close()

def CheckXaId(l, xa_id):
    for d in l:
        if d["data"] == xa_id:
            return True
    return False

def Baz(c0, xa_id_0, c1, xa_id_1):
    """
    two phase commit exapmle using XA
    """
    try:
        result_xa_id_0 = None
        result_xa_id_1 = None

        with c0.cursor() as cursor0, c1.cursor() as cursor1:
            cursor0.execute("XA START %s", (xa_id_0))
            cursor0.execute("INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)", ('webmaster@python.org', 'very-secret'))          
            cursor0.execute("XA END %s", (xa_id_0))
            cursor0.execute("XA PREPARE %s", (xa_id_0))
            cursor0.execute("XA RECOVER")
            result_xa_id_0 = cursor0.fetchall()
            print(result_xa_id_0)

            cursor1.execute("XA START %s", (xa_id_1))
            cursor1.execute("INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)", ('webmaster@python.org', 'very-secret'))          
            cursor1.execute("XA END %s", (xa_id_1))
            cursor1.execute("XA PREPARE %s", (xa_id_1))
            cursor1.execute("XA RECOVER")
            result_xa_id_1 = cursor1.fetchall()
            print(result_xa_id_1)

            if (result_xa_id_0 != None and result_xa_id_1 != None and
                CheckXaId(result_xa_id_0, xa_id_0) == True and CheckXaId(result_xa_id_1, xa_id_1) == True):
                cursor0.execute("XA COMMIT %s", (xa_id_0))
                cursor1.execute("XA COMMIT %s", (xa_id_1))
            else:
                cursor0.execute("XA ROLLBACK %s", (xa_id_0))
                cursor1.execute("XA ROLLBACK %s", (xa_id_1))

    except Exception as e:
        import traceback, sys
        print("ERR: exception")
        traceback.print_exc(file=sys.stdout)
        with c0.cursor() as cursor0, c1.cursor() as cursor1:
            cursor0.execute("XA ROLLBACK %s", (xa_id_0))
            cursor1.execute("XA ROLLBACK %s", (xa_id_1))
    finally:
        c0.close()
        c1.close()

if __name__ == '__main__':    
    #Foo(OpenConnection())
    #Bar(OpenConnection(), 'xa-1')
    Baz(OpenConnection(), 'xa-7', OpenConnection(), 'xa-8')