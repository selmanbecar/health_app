#API endpoints 

##Register
http://localhost:8000/api/register
Method:POST
Body type JSON
{

"email":"test@test.com",
"username":"test",
"password":"test"
}

##Login
Method:POST
http://localhost:8000/api/login
Body type JSON
{

"email":"test@test.com",
"password":"test"
}

##User add
Method:POST
http://localhost:8000/api/users
Body type JSON
{
"email":"test@test.com",
"username":"test",
"password":"test"
}
##User get all 
Method:GET
http://localhost:8000/api/users


##User get single
Method:GET
http://localhost:8000/api/users/:id

##User update
Method:PATCH
http://localhost:8000/api/users/:id
Body type JSON
{
"email":"test@test.com",
"username":"test",
"password":"test"
}

##User delete
Method:DELETE
http://localhost:8000/api/users/:id


#HEALTH


##Health add
Method:POST
http://localhost:8000/api/health
Body type JSON
{
"water":"string",
"sleep":Number
"meal":Number ,
"training":Boolean,
"user_id":user_id
}
##health get all by user
Method:GET
http://localhost:8000/api/health/user/:user_id


##health get single
Method:GET
http://localhost:8000/api/health/:id

##health update
Method:PATCH
http://localhost:8000/api/health/:id
Body type JSON
{
"water":"string",
"sleep":Number
"meal":Number ,
"training":Boolean
}

##health delete
Method:DELETE
http://localhost:8000/api/health/:id