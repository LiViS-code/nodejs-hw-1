# nodejs-hw-1

Practical work.
Working with files and the file system.
The database is emitted by a .json file
Implemented as a console application.

## Get all contacts from the database.

request:
```sh
$node app --action list
```
alternative request:
```sh
$node app -a list
```

![Alt text](https://monosnap.com/image/3xMrTWTEU1et0nLznXX3JFkw8uxuGi)

## Get contact by contact id.

request:
```sh
$node app --action get --id XXX-YYY
```
alternative request:
```sh
$node app -a get -i XXX-YYY
```

![Alt text](https://monosnap.com/image/6GfctAa2MfB2VLMTSSAPL9WuzUyfXx)

## Add a contact to the database.

request:
```sh
$node app --action add --name Mango --email mango@mail.com --phone +380675552233
```
alternative request:
```sh
$node app -a add -n Mango -e mango@mail.com -p +380675552233
```

![Alt text](https://monosnap.com/image/vTPWN6CFwFW7bbZ1fXwuGtM64YxshV)

## Delete a contact from the database.

request:
```sh
$node app --action remove --id XXX-YYY
```
alternative request:
```sh
$node app -a remove -i XXX-YYY
```

![Alt text](https://monosnap.com/image/PxfsdV9niqlU19Jr3oCLD9NTeWAdvS)
