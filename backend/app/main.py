from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import date
import os
import json

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/recipes")
def recipes(start_date: date, end_date: date):
    # fetches the json
    data = load_data()

    # filters by start and end date
    data = filter_data(data=data, start_date=str(start_date), end_date=str(end_date))

    if not data:
        return

    data_main, data_dessert, data_side = data

    return [data_main, data_dessert, data_side]


def load_data():
    try:
        current_dir = os.path.dirname(os.path.realpath(__file__))
        f = open(current_dir + "/recipes.json", "r")
        data = json.load(f)
        f.close()

        if data:
            return data
        else:
            raise Exception(f"There's no recipe data")
    except Exception as requestException:  # exception - fetching data was unsuccessful
        raise Exception("There was a problem getting recipe data")


def filter_data(data: list[dict], start_date: str, end_date: str):
    filtered_data_main = []
    filtered_data_side = []
    filtered_data_dessert = []

    for item in data:
        if item["date"] >= start_date and item["date"] <= end_date:
            if item["category"] == "Main":
                filtered_data_main.append(item)
            elif item["category"] == "Side":
                filtered_data_side.append(item)
            else:
                filtered_data_dessert.append(item)

    message = ""
    if len(filtered_data_main + filtered_data_side + filtered_data_dessert) == 0:
        message = "No recipes in the given time frame, stopping the process now."

    if message:
        print(message)
        return False
    else:
        return filtered_data_main, filtered_data_side, filtered_data_dessert
