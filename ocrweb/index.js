<html>
<head>
    <title>Optical Character Recognition with Microsoft Azure Machine Learning</title>
    <style>
        #imgView {
            border : 1px solid #FFFFFF;
        }
       
        #btnClear {
            background: gray;
            width: 280px;
            color: white;
            font-size: 2em;
        }
 
        #btnSend {
            background:gray;
            width: 280px;
            color: white;
            font-size: 2em;
        }
    </style>
</head>
 
<body>
    <canvas id="imgView" width="280" height="280">
        Unfortunately, your browser does not supported.
    </canvas>
 
    <p><button id="btnClear">Clear</button></p>
    <p><button id="btnSend">Send</button></p>
 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="./odr.js"></script>
</body>
</html>