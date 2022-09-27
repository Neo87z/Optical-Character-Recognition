const express = require('express');
const router = express.Router();
var _ = require("underscore");
const bcrypt = require('bcrypt');
let Room = require('../models/room')
let User = require('../models/messageData')
let Bet = require('../models/betdata');
const { forEach } = require('underscore');

const multer = require('multer');
module.exports = function () {

    //Imlashi
    router.post('/add_bet', function (req, res) {
        let RoomData = new Bet(req.body);
        RoomData.save()
            .then(Room => {
                var data = {
                    Status: "Sucess",
                    Message: "Room Created Sucessfully"
                }
                res.status(201).send(data);
            }).catch(err => {
                var data = {
                    Status: "Fail",
                    Message: "Unexpected Error PLease Contact System Admin"
                }
                res.status(200).send(data);
            });

    })


    //Imalshi
    router.get('/TestData', function (req, res) {
        User.find(function (err, data) {
            if (!err) {
                console.l
                res.status(200).send(data);

            } else {
                var data = {
                    Status: "Fail",
                    Message: "Unexpected Error PLease Contact System Admin"
                }
                res.status(200).send(data);
            }
        })
    })

    router.get('/getBEts', function (req, res) {
        Bet.find(function (err, data) {
            if (!err) {
                console.l
                res.status(200).send(data);

            } else {
                var data = {
                    Status: "Fail",
                    Message: "Unexpected Error PLease Contact System Admin"
                }
                res.status(200).send(data);
            }
        })
    })



    router.post('/addnewBet', function (req, res) {
        let RoomData = new Bet(req.body);
        var Bet1 = false;
        var Bet2 = false;
        var Bet3 = false;
        var Bet4 = false;
        Bet.find(function (err, data) {
            if (!err) {
                console.log((data[0]))

                data.forEach(element => {
                    if (element.BetID == '1') {
                        Bet1 = true;
                    }
                    if (element.BetID == '2') {
                        Bet2 = true;
                    }
                    if (element.BetID == '3') {
                        Bet3 = true;
                    }
                    if (element.BetID == '4') {
                        Bet4 = true;
                    }
                })

                if (Bet1 != true) {
                    RoomData.BetID = '1'
                    RoomData.save()
                        .then(Room => {
                            var data = {
                                Status: "Sucess",
                                Message: "Room Created Sucessfully"
                            }
                            res.status(201).send(data);
                        }).catch(err => {
                            var data = {
                                Status: "Fail",
                                Message: "Unexpected Error PLease Contact System Admin"
                            }
                            res.status(200).send(data);
                        });

                } else {
                    if (Bet2 != true) {
                        RoomData.BetID = '2'
                        RoomData.save()
                            .then(Room => {
                                var data = {
                                    Status: "Sucess",
                                    Message: "Room Created Sucessfully"
                                }
                                res.status(201).send(data);
                            }).catch(err => {
                                var data = {
                                    Status: "Fail",
                                    Message: "Unexpected Error PLease Contact System Admin"
                                }
                                res.status(200).send(data);
                            });
                    } else {
                        if (Bet3 != true) {
                            RoomData.BetID = '3'
                            RoomData.save()
                                .then(Room => {
                                    var data = {
                                        Status: "Sucess",
                                        Message: "Room Created Sucessfully"
                                    }
                                    res.status(201).send(data);
                                }).catch(err => {
                                    var data = {
                                        Status: "Fail",
                                        Message: "Unexpected Error PLease Contact System Admin"
                                    }
                                    res.status(200).send(data);
                                });

                        } else {
                            if (Bet4 != true) {
                                RoomData.BetID = '4'
                                RoomData.save()
                                    .then(Room => {
                                        var data = {
                                            Status: "Sucess",
                                            Message: "Room Created Sucessfully"
                                        }
                                        res.status(201).send(data);
                                    }).catch(err => {
                                        var data = {
                                            Status: "Fail",
                                            Message: "Unexpected Error PLease Contact System Admin"
                                        }
                                        res.status(200).send(data);
                                    });
                            } else {
                                res.status(200).send('Fail');
                            }
                        }
                    }
                }


            } else {
                var data = {
                    Status: "Fail",
                    Message: "Unexpected Error PLease Contact System Admin"
                }
                res.status(200).send(data);
            }
        })
    })



    //Imalshi
    //Imalshi

    router.post('/getBetByID', function (req, res) {
        console.log(req.body)
        Bet.find(function (err, dataX) {

            if (!err) {
                console.log(dataX)
                var filtered = _.where(dataX, { BetID: req.body.id });

                dataX.forEach(element => {
                    if (element.BetID == req.body.id) {
                        res.status(200).send(element);
                    }
                })
                console.log("HU", filtered)
                var data = {
                    Status: "Sucess",
                    Message: "Retrived All Room Data",
                    data: filtered
                }

            } else {
                var data = {
                    Status: "Fail",
                    Message: "Unexpected Error PLease Contact System Admin"
                }
                res.status(200).send(data);
            }
        })
    })




    //Imlashi



    router.post('/updateBet', function (req, res) {
        console.log(req.body)
        try {
            Bet.updateOne({ _id: req.body.id }, {
                BetName: req.body.BetName, ImageURL: req.body.ImageURL, Team1: req.body.Team1, Team2: req.body.Team2, BetID: req.body.BetID, Team1Logo: req.body.Team1Logo, Team2Logo: req.body.Team2Logo, Team1Score: req.body.Team1Score, Team2Score: req.body.Team2Score
            }, function (err, docs) {
                if (!err) {
                    var data = {
                        Status: "Sucess",
                        Message: "User Data Updated"
                    }
                    res.status(200).send(data);
                } else {
                    var data = {
                        Status: "Fail",
                        Message: "Unexpected Error PLease Contact System Admin"
                    }
                    res.status(200).send(data);
                }
            })
        } catch {
            var data = {
                Status: "Fail",
                Message: "Unexpected Error PLease Contact System Admin"
            }
            res.status(200).send(data);

        }
    })


    async function UpdateScore(BetID, RealScore1, RealScore2) {



        Bet.find(function (err, dataX) {

            if (!err) {
                console.log(dataX)


                dataX.forEach(element => {
                    if (element.BetID == BetID) {
                        try {
                            Bet.updateOne({ BetID: BetID }, {
                                BetName: element.BetName, ImageURL: element.ImageURL, Team1: element.Team1, Team2: element.Team2, BetID: element.BetID, Team1Logo: element.Team1Logo, Team2Logo: element.Team2Logo, Team1Score: RealScore1, Team2Score: RealScore2
                            }, function (err, docs) {
                                if (!err) {
                                    var data = {
                                        Status: "Sucess",
                                        Message: "User Data Updated"
                                    }
                                    console.log('done')
                                    return


                                } else {
                                    var data = {
                                        Status: "Fail",
                                        Message: "Unexpected Error PLease Contact System Admin"
                                    }
                                    console.log('Fail')
                                    return

                                }
                            })
                        } catch {
                            var data = {
                                Status: "Fail",
                                Message: "Unexpected Error PLease Contact System Admin"
                            }
                            res.status(200).send(data);

                        }
                    }
                })


            } else {
                var data = {
                    Status: "Fail",
                    Message: "Unexpected Error PLease Contact System Admin"
                }
                res.status(200).send(data);
            }
        })



    }
    const multer = require('multer');
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './uploads/');
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    })

    const upload = multer({ storage: storage });

    router.post('/api/upload', upload.single('uploadedimage'), (req, res) => {
        console.log(req.file);
        try {
            Tesseract.recognize(
                'uploads/' + req.file.filename,
                'eng',
                { logger: m => console.log(m) }
            ).then(({ data: { text } }) => {
                return res.json({
                    message: text
                }

                )
            })


        } catch (error) {
            console.error(error)
        }
    })


    router.post('/deleteBEt', function (req, res) {
        try {
            Bet.deleteOne({ _id: req.body.id }, function (err, docs) {
                if (!err) {
                    var data = {
                        Status: "Sucess",
                        Message: "User Data Updated"
                    }
                    res.status(200).send(data);
                } else {
                    var data = {
                        Status: "Fail",
                        Message: "Unexpected Error PLease Contact System Admin"
                    }
                    res.status(200).send(data);
                }
            })
        } catch {
            var data = {
                Status: "Fail",
                Message: "Unexpected Error PLease Contact System Admin"
            }
            res.status(200).send(data);

        }
    })

    var Score1 = ""
    var Score2 = ""
    var Score3 = ""
    var Score4 = ""

    router.post('/GetEventScores', async function (req, res) {

        var Bet1 = false;
        var Bet2 = false;
        var Bet3 = false;
        var Bet4 = false;
        var Bet1Url = ""
        var Bet2Url = ""
        var Bet3Url = ""
        var Bet4Url = ""
        x = ""

        var BetScore1 = ""
        var BetScore2 = ""
        var BetScore3 = ""
        var BetScore4 = ""
        const ScoreData = []

        try {

            await Bet.find(function (err, data) {
                if (!err) {

                    data.forEach(element => {
                        if (element.BetID == '1' && element.Team2 == 'Active') {
                            Bet1 = true;
                            Bet1Url = element.Team2Logo
                            console.log(Bet1Url)
                        }
                        if (element.BetID == '2' && element.Team2 == 'Active') {
                            Bet2 = true;
                            Bet2Url = element.Team2Logo
                        }
                        if (element.BetID == '3' && element.Team2 == 'Active') {
                            Bet3 = true;
                            Bet3Url = element.Team2Logo
                        }
                        if (element.BetID == '4' && element.Team2 == 'Active') {
                            Bet4 = true;
                            Bet4Url = element.Team2Logo
                        }
                    })

                } else {
                    var data = {
                        Status: "Fail",
                        Message: "Unexpected Error PLease Contact System Admin"
                    }
                    res.status(200).send(data);
                }
            })
            if (Bet1 == true) {
                await TakeScreenShot(Bet1Url)
                await CropImage(1)
                BetScore1 = await GetScore(1)
                try {
                    var Bet1Score = Score1.split('-')
                    var Bet1Team1Score = Bet1Score[0]
                    var Bet1Team1Score2 = Bet1Score[1]
                    Bet1Team1Score = Bet1Team1Score.replace(' ', '')
                    Bet1Team1Score = Bet1Team1Score.replace('\n', '')
                    Bet1Team1Score2 = Bet1Team1Score2.replace(' ', '')
                    Bet1Team1Score2 = Bet1Team1Score2.replace('\n', '')

                } catch (error) {
                    Bet1Team1Score = "-"
                    Bet1Team1Score2 = "-"

                }



                UpdateScore("1", Bet1Team1Score, Bet1Team1Score2)
            }
            if (Bet2 == true) {
                await TakeScreenShot(Bet2Url)
                await CropImage(2)
                await GetScore(2)
                try {

                    var Bet2Score = Score2.split('-')
                    var Bet1Team1Score = Bet2Score[0]
                    var Bet1Team1Score2 = Bet2Score[1]
                    Bet1Team1Score = Bet1Team1Score.replace(' ', '')
                    Bet1Team1Score = Bet1Team1Score.replace('\n', '')
                    Bet1Team1Score2 = Bet1Team1Score2.replace(' ', '')
                    Bet1Team1Score2 = Bet1Team1Score2.replace('\n', '')
                } catch (error) {
                    Bet1Team1Score = "-"
                    Bet1Team1Score2 = "-"

                }

                UpdateScore("2", Bet1Team1Score, Bet1Team1Score2)
            }
            if (Bet3 == true) {
                await TakeScreenShot(Bet3Url)
                await CropImage(3)
                await GetScore(3)
                try {
                    var Bet3Score = Score3.split('-')
                    var Bet1Team1Score = Bet3Score[0]
                    var Bet1Team1Score2 = Bet3Score[1]
                    Bet1Team1Score = Bet1Team1Score.replace(' ', '')
                    Bet1Team1Score = Bet1Team1Score.replace('\n', '')
                    Bet1Team1Score2 = Bet1Team1Score2.replace(' ', '')
                    Bet1Team1Score2 = Bet1Team1Score2.replace('\n', '')
                } catch {
                    Bet1Team1Score = "-"
                    Bet1Team1Score2 = "-"
                }
                UpdateScore("3", Bet1Team1Score, Bet1Team1Score2)
            }
            if (Bet4 == true) {
                await TakeScreenShot(Bet4Url)
                await CropImage(4)
                await GetScore(4)
                try {
                    var Bet4Score = Score4.split('-')
                    var Bet1Team1Score = Bet4Score[0]
                    var Bet1Team1Score2 = Bet4Score[1]
                    Bet1Team1Score = Bet1Team1Score.replace(' ', '')
                    Bet1Team1Score = Bet1Team1Score.replace('\n', '')
                    Bet1Team1Score2 = Bet1Team1Score2.replace(' ', '')
                    Bet1Team1Score2 = Bet1Team1Score2.replace('\n', '')

                } catch {
                    Bet1Team1Score = "-"
                    Bet1Team1Score2 = "-"
                }

                UpdateScore("4", Bet1Team1Score, Bet1Team1Score2)
            }



            res.status(200).send(data);
            console.log(Bet1Score, '1finally')
            console.log(Bet2Score, '2finally')
            console.log(Bet3Score, '3finally')
            console.log(Bet4Score, '4finally')




        } catch {

        }
        res.status(200).send('data');

    })




    async function GetScore(betID) {

        const Tesseract = require('tesseract.js')
        try {
            await Tesseract.recognize(
                'images/croppedImage.jpg',
                'eng',
                { logger: m => console.log(m) }
            ).then((data) => {
                console.log(data.data.text)
                Score = data.data.text
                if (betID == 1) {
                    Score1 = data.data.text

                } else {
                    if (betID == 2) {
                        Score2 = data.data.text
                    } else {
                        if (betID == 3) {
                            Score3 = data.data.text
                        } else {
                            if (betID == 4) {
                                Score4 = data.data.text
                            }
                        }
                    }
                }



            })

        } catch {
            console.log('fail')
        }

    }



    async function CropImage() {
        
        const sharp = require('sharp');
        let originalImage = 'images/website.png';

        // file name for cropped image
        let outputImage = 'images/croppedImage.jpg';

        await sharp(originalImage).extract({ width: 270, height: 100, left: 225, top: 350 }).toFile(outputImage)
            .then(function (new_file_info) {
                console.log("Image cropped and saved");
            })
            .catch(function (err) {
                console.log(err);
            });

    }

    async function TakeScreenShot(URLDATA) {


        const puppeteer = require("puppeteer")
        
        const browser = await puppeteer.launch({
            args: [
              '--no-sandbox',
              '--disable-setuid-sandbox',
            ],
          });
        const page = await browser.newPage();
        const options = {
            path: 'images/website.png',
            fullpage: true,
            omitBackground: true
        }
        await page.goto(URLDATA);
        await page.screenshot(options)
        await browser.close()
    }


    return router;
}