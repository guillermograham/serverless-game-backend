curl -H "Content-Type: application/json" -X POST http://localhost:3000/users -d '{"userId": "will1", "name": "William Graham"}'

curl -H "Content-Type: application/json" -X GET http://localhost:3000/users/will1
