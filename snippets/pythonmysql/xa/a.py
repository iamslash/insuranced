import mysql.connector

c = mysql.connector.connect(host='127.0.0.1', port=5705, user='iamslash', password='skekakstp');
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
c.disconnect()