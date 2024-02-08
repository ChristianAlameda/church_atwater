#pip install flask 
#pip install requests
from flask import Flask, render_template, request, url_for, redirect, session, jsonify
from database import Database
import json
import re
from bson import ObjectId

import webbrowser

class MyFlaskApp:
    def __init__(self):
        # GLOBAL VARS
        self.curr_email = ''
        self.selected_result = ''

        # Initialize Flask app
        self.app = Flask(__name__, static_url_path='/static')   # COLE - Added "static_url_path='/static" to reference static files in code
        self.app.secret_key = 'your_secret_key_here'

        ### APP ROUTES ###
        
        # HOME / SINGLE PAGES
        self.app.add_url_rule('/', 'index', self.index)
        self.app.add_url_rule('/whatWeBelieve', 'whatWeBelieve', self.whatWeBelieve)
        self.app.add_url_rule('/whoWeAre', 'whoWeAre', self.whoWeAre)
        
        # DOUBLE / TRIPLE PAGES
        # BAPTISM
        self.app.add_url_rule('/baptism', 'baptism', self.baptism)
        self.app.add_url_rule('/baptismForm', 'baptismForm', self.baptismForm)
        self.app.add_url_rule('/baptismFormValidation', 'baptismFormValidation', self.baptismFormValidation, methods=['POST'])
        # GET CONNECTED
        self.app.add_url_rule('/getConnected', 'getConnected', self.getConnected)
        self.app.add_url_rule('/getConnectedForm', 'getConnectedForm', self.getConnectedForm)
        self.app.add_url_rule('/getConnectedFormValidation', 'getConnectedFormValidation', self.getConnectedFormValidation, methods=['POST'])
        # GIVE
        self.app.add_url_rule('/give', 'give', self.give)
        self.app.add_url_rule('/giveForm', 'giveForm', self.giveForm)
        self.app.add_url_rule('/giveFormValidation', 'giveFormFormValidation', self.giveFormValidation, methods=['POST'])
        # HELPOUT
        self.app.add_url_rule('/helpOut', 'helpOut', self.helpOut)
        self.app.add_url_rule('/helpOutJob1Form', 'helpOutJob1Form', self.helpOutJob1Form)
        self.app.add_url_rule('/helpOutJob1FormValidation', 'helpOutJob1FormValidation', self.helpOutJob1FormValidation, methods=['POST'])
        self.app.add_url_rule('/helpOutJob2Form', 'helpOutJob2Form', self.helpOutJob2Form)
        self.app.add_url_rule('/helpOutJob2FormValidation', 'helpOutJob2FormValidation', self.helpOutJob2FormValidation, methods=['POST'])
        
        
        # DB CLASS INITIALIZATION
        self.database = Database()
        self.database.connect()
        self.database.checkIfEmpty()
        
        webbrowser.open("http://127.0.0.1:5000")
        

    ######################################
    ######################################
    ############# ACTUAL APP #############
    ######################################
    ######################################
    
    ###############################
    ######## LAUCH POINTS #########
    ###############################
    def index(self):
        return render_template('index.html')
    
    def baptism(self):
        return render_template('baptism.html')
    
    def getConnected(self):
        return render_template('getConnected.html')
    
    def give(self):
        return render_template('give.html')
    
    def helpOut(self):
        return render_template('helpOut.html')
    
    def whatWeBelieve(self):
        return render_template('whatWeBelieve.html')
    
    def whoWeAre(self):
        return render_template('whoWeAre.html')
    
    ###############################
    ############# FORMS ###########
    ###############################
    
    def baptismForm(self):
        return render_template('forms/baptisms/baptismForm.html')
    
    def getConnectedForm(self):
        return render_template('forms/connections/getConnectedForm.html')
    
    # Job Forms
    def helpOutJob1Form(self):
        return render_template('forms/jobs/helpOutJob1Form.html')
    
    def helpOutJob2Form(self):
        return render_template('forms/jobs/helpOutJob2Form.html')
    
    def giveForm(self):
        return render_template('forms/donations/giveForm.html')
    
    
    ###############################
    ####### FORM VALIDATION #######
    ###############################
    
    def baptismFormValidation(self):
        """_summary_: do stuff then return home

        Returns:
            _type_: _description_
        """
        fName = request.form['first-name']
        lName = request.form['last-name']
        phone = request.form['phone']
        email = request.form['email']
        whyJoin = request.form['why-join']
        reason = 'baptism'
        
        self.insertion(fName, lName, phone, email, whyJoin, reason)
        return redirect(url_for('index'))

    def getConnectedFormValidation(self):
        """_summary_: do stuff then return home

        Returns:
            _type_: _description_
        """
        fName = request.form['first-name']
        lName = request.form['last-name']
        phone = request.form['phone']
        email = request.form['email']
        whyJoin = request.form['why-join']
        reason = 'connection'
        
        self.insertion(fName, lName, phone, email, whyJoin, reason)
        return redirect(url_for('index'))
    
    def helpOutJob1FormValidation(self):
        """_summary_: do stuff then return home

        Returns:
            _type_: _description_
        """
        fName = request.form['first-name']
        lName = request.form['last-name']
        phone = request.form['phone']
        email = request.form['email']
        whyJoin = request.form['why-join']
        reason = 'job1'
        
        self.insertion(fName, lName, phone, email, whyJoin, reason)
        return redirect(url_for('index'))
    
    def helpOutJob2FormValidation(self):
        """_summary_: do stuff then return home

        Returns:
            _type_: _description_
        """
        fName = request.form['first-name']
        lName = request.form['last-name']
        phone = request.form['phone']
        email = request.form['email']
        whyJoin = request.form['why-join']
        reason = 'job2'
        
        self.insertion(fName, lName, phone, email, whyJoin, reason)
        return redirect(url_for('index'))
    
    def giveFormValidation(self):
        """_summary_: do stuff then return home

        Returns:
            _type_: _description_
        """
        fName = request.form['first-name']
        lName = request.form['last-name']
        phone = request.form['phone']
        email = request.form['email']
        moneyAmmount = request.form['money-ammt']
        whyJoin = request.form['why-join']
        reason = 'giving'
        
        insertion = {
            'fname':fName,
            'lName':lName,
            'phone':phone,
            'email':email,
            'moneyAmmount':float(moneyAmmount),
            'whyJoin':whyJoin,
            'reason':reason
        }
        print(insertion)
        self.database.insertPost(insertion)
        
        return redirect(url_for('index'))

    #################################
    #################################
    ######## HELPER FUCTIONS ########
    #################################
    #################################
    
    def insertion(self, fName, lName, phone, email, whyJoin, reason):
        insertion = {
            'fname':fName,
            'lName':lName,
            'phone':phone,
            'email':email,
            'whyJoin':whyJoin,
            'reason':reason
        }
        print(insertion)
        self.database.insertPost(insertion)
        
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
