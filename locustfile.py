from locust import HttpUser, TaskSet, task

class User(HttpUser):
   
   @task(2)
   def index(self):
       self.client.get("https://easyrent-api-test.cit362.com/reservations")
 
 
#     @task(2)
#    def index(self):
#        self.client.post("https://easyrent-api-test.cit362.com/reservations", {"customerId": "Angie.Abram@test.com", "reservationItems": [{ "description": "Canoe", "itemId": 4949489,"returned": 'false'}],"dueDate": 1610148694321})