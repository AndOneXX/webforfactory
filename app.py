from flask import Flask, request, render_template, jsonify
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/update-file', methods=['POST'])
def update_file():
    data = request.json
    selected_value = data.get('value')
    
    if selected_value:
        try:
            with open('selected_value.txt', 'a') as file:
                file.write(selected_value + '\n')
            return jsonify({'message': 'Файл обновлен удачно'}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    else:
        return jsonify({'error': 'Нет значений для записи'}), 400

if __name__ == '__main__':
    app.run(debug=True)