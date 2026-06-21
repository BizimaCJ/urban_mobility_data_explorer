import mysql.connector
from mysql.connector import Error

class DatabaseConfig:
    """MySQL Database Connection Configuration"""
    
    def __init__(self, host='localhost', user='root', password='', database='nyc_taxi'):
        self.host = host
        self.user = user
        self.password = password
        self.database = database
        self.connection = None
    
    def connect(self):
        """Establish database connection"""
        try:
            self.connection = mysql.connector.connect(
                host=self.host,
                user=self.user,
                password=self.password,
                database=self.database
            )
            print(f"✓ Connected to {self.database} database on {self.host}")
            return self.connection
        except Error as e:
            print(f"✗ Database connection error: {e}")
            print(f"  Host: {self.host}")
            print(f"  User: {self.user}")
            print(f"  Database: {self.database}")
            return None
    
    def close(self):
        """Close database connection"""
        if self.connection:
            self.connection.close()
            print("✓ Connection closed")
    
    def execute_query(self, query, params=None):
        """Execute a SELECT query and return results"""
        if not self.connection:
            self.connect()
        
        try:
            cursor = self.connection.cursor(dictionary=True)
            if params:
                cursor.execute(query, params)
            else:
                cursor.execute(query)
            results = cursor.fetchall()
            cursor.close()
            return results
        except Error as e:
            print(f"✗ Query error: {e}")
            return None

# Global database instance - UPDATE THESE VALUES
db_config = DatabaseConfig(
    host='YOUR_TEAMMATE_HOST_HERE',        # ← Ask teammate (localhost or IP)
    user='root',                            # ← Probably this
    password='YOUR_TEAMMATE_PASSWORD_HERE', # ← Ask teammate
    database='nyc_taxi'                     # ← This is correct
)