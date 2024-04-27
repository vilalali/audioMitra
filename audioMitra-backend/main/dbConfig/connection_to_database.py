import json
import os
import sys

# Specify the absolute path to properties.json
properties_file_path = r'C:\Users\bomma\OneDrive\Desktop\Bhaskara Hanuma\audioMitra-master\audioMitra-backend\properties.json'

# Check if the properties.json file exists
if not os.path.exists(properties_file_path):
    print(f"Error: File '{properties_file_path}' not found.")
    sys.exit(1)

# Read the JSON file
with open(properties_file_path, 'r') as file:
    data = json.load(file)

db_config = {
    'user': data['user'],
    'password': data['password'],
    'host': data['host'],
    'database': data['database']
}

def connect_to_database():
    try:
        conn = mysql.connector.connect(**db_config)
        return conn
    except Exception as e:
        raise e
