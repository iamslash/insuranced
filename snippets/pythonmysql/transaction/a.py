import pymysql

def foo(c):
    cur = c.cursor();
    cur.execute("START TRANSACTION;");
    cur.execute("SELECT @A:=SUM(salary) FROM table1 WHERE type=1;");
    cur.execute("UPDATE t1 SET summary=@A WHERE type=1;");
    cur.execute("COMMIT;");
    cur.close()

if __name__ == '__main__':
    c = pymysql.connect(host='localhost', user='iamslash', 
        password='skekakstp', db='test', charset='utf8');
    c.close()