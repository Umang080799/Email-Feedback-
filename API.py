import os
from flask import Flask, flash, request, redirect, url_for
from subprocess import call
import json
import pandas as pd
import base64
from werkzeug.utils import secure_filename
import glob, os
import threading
import smtplib
import uuid
import json
from pydub import AudioSegment
from google.cloud import speech as googlespeech
from google.cloud import speech
from google.cloud.speech import enums
from google.cloud.speech import types
import io
import time
import nltk
import MySQLdb as mysql
from nltk.tokenize import RegexpTokenizer




app = Flask(__name__)

@app.route("/plugin",methods=["POST"])
def login():
    if __name__ == '__main__':
     app.run()
