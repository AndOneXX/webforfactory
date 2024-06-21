from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route('/update-file', methods=['POST'])
def update_file():
    data = request.json
    selected_value = data.get('value')
    
    if selected_value:
        try:
            with open('selected_value.txt', 'w') as file:
                file.write(selected_value)
            return jsonify({'message': 'File updated successfully'}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    else:
        return jsonify({'error': 'No value provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)