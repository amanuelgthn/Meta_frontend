#!/usr/bin/python3
"""
create app.py
"""

from flask import Flask, request, jsonify


app = Flask(__name__)

countries = [
    {"id": 1, "name": "Ethiopia", "capital": "Addis Ababa", "Language": "Amharic"},
    {"id": 2, "name": "Poland", "capital": "Warsaw", "Language": "Polish"},
    {"id": 3, "name": "China", "capital": "Beijing", "Language": "Chinese"},
    {"id": 4, "name": "Egypt", "capital": "Egypt", "Language": "Arabic"},
]

def _find_next_id():
    return max(country["id"] for country in countries) + 1

@app.get('/countries')
def get_countries():
    return jsonify(countries)


@app.post('/countries')
def add_country():
    if request.is_json:
        country = request.get_json()
        country["id"] = _find_next_id()
        countries.append(country)
        return country, 201
    return {"error": "Request must be JSON"}, 415



