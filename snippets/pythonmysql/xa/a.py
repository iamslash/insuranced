import pymysql

def foo(c):
    cur = c.cursor();
    cur.execute("XA START 'py-xa-001'");
    cur.execute("INSERT INTO test.t1 VALUES(1)");
    cur.execute("XA RECOVER");
    print(cur.fetchone());
    cur.execute("XA END 'py-xa-001'");
    cur.execute("XA PREPARE 'py-xa-001'");
    cur.execute("XA RECOVER");
    print(cur.fetchone());
    cur.execute("XA ROLLBACK 'py-xa-001'");
    cur.close()

def bar(c):
    cur = c.cursor()
    sql = "SELECT * FROM t1"
    cur.execute(sql);
    rows = cur.fetchall()
    print(rows)

if __name__ == '__main__':
    c = pymysql.connect(host='localhost', user='iamslash', 
        password='skekakstp', db='test', charset='utf8');
    bar(c)
    c.close()