import { ResearchType } from "./models/research-type";

class NineIslesService {
    constructor() { }

    getNineIslesData() {
        return {
            "Settlements": [
                {
                    "Name": "Aviasta",
                    "Buildings": [
                        {
                            "Name": "Training Yard",
                            "Description": "+50% XP per person who trains here",
                            "BuildPoints": 10,
                            "WorkersRequired": 0
                        },
                        {
                            "Name": "Stone Walls",
                            "Description": "Stone fortifications to protect 500 people",
                            "BuildPoints": 50,
                            "WorkersRequired": 0
                        },
                        {
                            "Name": "Shield Makers' Workshop",
                            "Description": "Produces 10 shields per year",
                            "BuildPoints": 10,
                            "WorkersRequired": 10
                        },
                        {
                            "Name": "Wind Empowered Mill",
                            "Description": "Increases farm efficiency by 0.5 total",
                            "BuildPoints": 10,
                            "WorkersRequired": 10
                        },
                        {
                            "Name": "Armoury",
                            "Description": "Increase the life span of equipment by 20%",
                            "BuildPoints": 10,
                            "WorkersRequired": 0
                        },
                        {
                            "Name": "Pony Ranch",
                            "Description": "When staffed with 10 people will increase the number of wind ponies each year by D4",
                            "BuildPoints": 10,
                            "WorkersRequired": 10
                        },
                        {
                            "Name": "Bowyers' Workshops",
                            "Description": "Produces longbows",
                            "BuildPoints": 20,
                            "WorkersRequired": 20
                        },
                        {
                            "Name": "Holy Site",
                            "Description": "The Wind Tower",
                            "BuildPoints": 70,
                            "WorkersRequired": 0
                        },
                        {
                            "Name": "Textile Workshop",
                            "Description": "Produces 10 Units of Q2 textiles each year",
                            "BuildPoints": 10,
                            "WorkersRequired": 10
                        },
                        {
                            "Name": "Gorgon Cave",
                            "Description": "Home for a Chimaeric Gorgon",
                            "BuildPoints": 10,
                            "WorkersRequired": 0
                        },
                        {
                            "Name": "Arrow Towers",
                            "Description": "+1 defense for troops in the towers, consumes 5 bows a year, but will generate bow armed militia when the settlement is attacked",
                            "BuildPoints": 50,
                            "WorkersRequired": 0
                        },
                        {
                            "Name": "Silver Mine",
                            "Description": "Produce 20 units of Q4 silver each year",
                            "BuildPoints": 10,
                            "WorkersRequired": 10
                        },
                        {
                            "Name": "Gatherer’s Hut",
                            "Description": "Gather 'herbs'",
                            "BuildPoints": 10,
                            "WorkersRequired": 10
                        },
                        {
                            "Name": "Hand Cart Workshop",
                            "Description": "Produces hand carts",
                            "BuildPoints": 10,
                            "WorkersRequired": 10
                        },
                        {
                            "Name": "Library",
                            "Description": "+0.1 Research efficiency",
                            "BuildPoints": 10,
                            "WorkersRequired": 10
                        },
                        {
                            "Name": "Witch's Hut",
                            "Description": "+20% population growth from rolls",
                            "BuildPoints": 10,
                            "WorkersRequired": 0
                        }
                    ]
                },
                {
                    "Name": "Seltbey",
                    "Buildings": [
                        {
                            "Name": "Bowyers' Workshops",
                            "Description": "Produces longbows",
                            "BuildPoints": 20,
                            "WorkersRequired": 20
                        },
                        {
                            "Name": "Armoury",
                            "Description": "Equipment lasts 20% longer",
                            "BuildPoints": 10,
                            "WorkersRequired": 0
                        },
                        {
                            "Name": "Arrow Towers",
                            "Description": "+1 defense for troops in the towers, consumes 5 bows a year, but will generate bow armed militia when the settlement is attacked",
                            "BuildPoints": 100,
                            "WorkersRequired": 0
                        },
                        {
                            "Name": "Textile Workshop",
                            "Description": "Produces 10 x Q2 Textiles",
                            "BuildPoints": 100,
                            "WorkersRequired": 0
                        },
                        {
                            "Name": "Windmill",
                            "Description": "+0.2 to Farm Efficiency",
                            "BuildPoints": 10,
                            "WorkersRequired": 10
                        }
                    ]
                }
            ],
            "ResearchData": [
                {
                    "Name": "Mills",
                    "Description": "May build Mills which improve Farm efficiency by +0.2",
                    "Type": ResearchType.Economic,
                    "Level": 1
                },
                {
                    "Name": "Wind Pony Riding",
                    "Description": "Ride Wind Ponies",
                    "Type": ResearchType.Military,
                    "Level": 1
                },
                {
                    "Name": "Archery",
                    "Description": "Damage 3 bows",
                    "Type": ResearchType.Military,
                    "Level": 1
                },
                {
                    "Name": "Crop Rotation",
                    "Description": "+0.1 farm efficiency",
                    "Type": ResearchType.Economic,
                    "Level": 1
                }
            ]
        };
    }
}

export const nineIslesService = new NineIslesService();
