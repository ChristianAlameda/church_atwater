#pip install flask 
#pip install requests
from flask import Flask, render_template, request, url_for, redirect, session, jsonify
from database import Database
import json
import re
from bson import ObjectId

class MyFlaskApp:
    def __init__(self):
        # GLOBAL VARS
        self.curr_email = ''
        self.selected_result = ''

        # Initialize Flask app
        self.app = Flask(__name__, static_url_path='/static')   # COLE - Added "static_url_path='/static" to reference static files in code
        self.app.secret_key = 'your_secret_key_here'

        ### APP ROUTES ###
        # HOME
        self.app.add_url_rule('/', 'index', self.index)   # NOTE: Changed to home from /
        
        
        # DB CLASS INITIALIZATION
        self.database = Database()
        self.database.connect()
        self.database.checkIfEmpty()

    ######################################
    ######################################
    ############# ACTUAL APP #############
    ######################################
    ######################################
    
    def index(self):
        return render_template('index.html')


    #################################
    #################################
    ######## HELPER FUCTIONS ########
    #################################
    #################################
    
    def parseStringToDict(self, stringedDictionary:str):
        # Define a regular expression pattern to match key-value pairs
        pattern = r"'(\w+)': (?:'([^']*)'|(?:\[(.*?)\])|(\d+\.\d+)|ObjectId\('([^']*)'\))"

        # Find all key-value pairs in the string
        matches = re.findall(pattern, stringedDictionary)

        # Create a dictionary from the matches
        data = {}
        for key, value_str, list_str, float_str, obj_id in matches:
            value = value_str if value_str else (list_str.split(', ') if list_str else (float(float_str) if float_str else obj_id))
            data[key] = value
        
        # data = self.remove_double_quotes(data)
        return data
    
    def catch_duplicate(self, item:dict):
        # see if a user has added a bird that 
        # he has already added
        #gives me a string
        print("item['item']",'  ',type(item['item']), '  ', item['item'])
        
        self.user_database.connect(self.curr_email)
        #remove the newest duplicate
        posts = self.user_database.getPost({'item':item})   # COLE - Changed original getPosts() method call to getPost() since only single query result is selected for adding to catalogue
        print(posts)
        # cursor_list = list(posts)
        # print(cursor_list)
        if posts:
            self.user_database.deletePost(posts)
            return False
        else: return item
    
    def check_empty(self, results):
        results_list = list(results)
        return results_list, len(results_list) == 0
        
if __name__ == "__main__":
    x = MyFlaskApp()
    x.app.run(host="0.0.0.0", port=5000)
