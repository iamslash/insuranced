mongoimport -d Northwind -c categories --type csv --file categories.csv --headerline
mongoimport -d Northwind -c customers --type csv --file customers.csv --headerline
mongoimport -d Northwind -c employee-territories --type csv --file employee-territories.csv --headerline
mongoimport -d Northwind -c employees --type csv --file employees.csv --headerline
mongoimport -d Northwind -c northwind --type csv --file northwind.csv --headerline
mongoimport -d Northwind -c order-details --type csv --file order-details.csv --headerline
mongoimport -d Northwind -c orders --type csv --file orders.csv --headerline
mongoimport -d Northwind -c products --type csv --file products.csv --headerline
mongoimport -d Northwind -c regions --type csv --file regions.csv --headerline
mongoimport -d Northwind -c shippers --type csv --file shippers.csv --headerline
mongoimport -d Northwind -c suppliers --type csv --file suppliers.csv --headerline
mongoimport -d Northwind -c territories --type csv --file territories.csv --headerline