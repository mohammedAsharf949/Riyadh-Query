define(["esri/layers/FeatureLayer"], function (FeatureLayer) {
  return {
    addLayers: function (map) {
      //------------------ Weels Layer---

      const WeelsFL = new FeatureLayer({
        url: "https://services6.arcgis.com/xxq56v5fuMeCokTb/arcgis/rest/services/Wells/FeatureServer/0",
        outFields: ["*"],
        visible: false,
        popupTemplate: {
          title: "الابار",
          // Title field from the feature attributes

          fieldInfos: [
            {
              fieldName: "WellNumber",
              visible: true,
              label: "رقم البئر:",
            },
            {
              fieldName: "WelName",
              visible: true,
              label: "أسم البئر:",
            },
            {
              fieldName: "latitude",
              visible: true,
              label: "الاخداثيات الشرقية:",
            },
            {
              fieldName: "longitude",
              visible: false,
              label: "الاحداثيات الشمالية:",
            },
            {
              fieldName: "WellType",
              visible: true,
              label: "النوع:",
            },
            {
              fieldName: "WellDiameter",
              visible: false,
              label: "القطر:",
            },
            {
              fieldName: "District",
              visible: true,
              label: "الحي:",
            },
            {
              fieldName: "Municipality",
              visible: true,
              label: "البلدية:",
            },
            {
              fieldName: "Unit",
              visible: true,
              label: "الوحدة:",
            },
            {
              fieldName: "Notes",
              visible: false,
              label: "ملاحظات:",
            },

            // Add more fields as needed
          ],
          content: [
            {
              type: "fields",
            },
          ],
        },
      });

      map.add(WeelsFL);

      //------------------------------------------MosqsArea
      /*  const MosqeFL = new FeatureLayer({
                url: "https://services8.arcgis.com/odFFccKWFi1AuXu9/ArcGIS/rest/services/Emtithal/FeatureServer/1",
                outFields: ["*"], // Fetch all fields for popup
                visible: false,
                popupTemplate: {
                    title: "ساحات المساجد",
                    // Title field from the feature attributes

                    fieldInfos: [{
                        fieldName: "MosqueName",
                        visible: true,
                        label: "اسم المسجد:"
                    }, {
                        fieldName: "Phase",
                        visible: true,
                        label: "المرحلة:"
                    },
                    {
                        fieldName: "CurrentSituation",
                        visible: true,
                        label: "الوضع الحالي:"
                    }, {
                        fieldName: "MUNICIPALITYARNAME",
                        visible: true,
                        label: "البلدية:"
                    }, {
                        fieldName: "DISTRICTARNAME",
                        visible: true,
                        label: "الحي:"
                    }


                        // Add more fields as needed
                    ],
                    content: [

                        {
                            type: "fields"

                        }

                    ]
                }
            });
            map.add(MosqeFL); */

      //------------------------------------------Gardens
      /*  const GardernsFL = new FeatureLayer({
                url: "https://services8.arcgis.com/odFFccKWFi1AuXu9/ArcGIS/rest/services/Emtithal/FeatureServer/2",
                outFields: ["*"], // Fetch all fields for popup
                visible: false,
                popupTemplate: {
                    title: "الحدائق",
                    // Title field from the feature attributes

                    fieldInfos: [{
                        fieldName: "ID",
                        visible: true,
                        label: "المعرف:"
                    }, {
                        fieldName: "Code",
                        visible: true,
                        label: "الكود:"
                    },
                    {
                        fieldName: "Name",
                        visible: true,
                        label: "الاسم:"
                    }, {
                        fieldName: "Type ",
                        visible: true,
                        label: "النوع:"
                    }, {
                        fieldName: "MUNICIPALITYARNAME",
                        visible: true,
                        label: "البلدية:"
                    }, {
                        fieldName: "DISTRICTARNAME",
                        visible: true,
                        label: "الحي:"
                    }, {
                        fieldName: "Latitude",
                        visible: true,
                        label: "الاحداثيات الشرقية:"
                    },
                    {
                        fieldName: "Longitude",
                        visible: true,
                        label: "الاحداثيات الشمالية:"
                    }, {
                        fieldName: "TotalArea",
                        visible: true,
                        label: "المساحة الكلية:"
                    }, {
                        fieldName: "SecurityRooms ",
                        visible: true,
                        label: "غرف حراسة:"
                    },
                    {
                        fieldName: "Men_WC",
                        visible: true,
                        label: "دورات مياه رجال:"
                    }, {
                        fieldName: "Women_WC",
                        visible: true,
                        label: "دورات مياه نساء:"
                    }


                        // Add more fields as needed
                    ],
                    content: [

                        {
                            type: "fields"

                        }

                    ]
                }
            });
            map.add(GardernsFL); */
      //------------------------------------------GardensProjects
      const GardensProjectsFL = new FeatureLayer({
        url: "https://services6.arcgis.com/xxq56v5fuMeCokTb/arcgis/rest/services/New_Gardens/FeatureServer/0",
        outFields: ["*"], // Fetch all fields for popup
        visible: false,
        popupTemplate: {
          title: "مشاريع تنفيذ الحدائق",
          // Title field from the feature attributes

          fieldInfos: [
            {
              fieldName: "Municipality",
              visible: true,
              label: "البلدية:",
            },
            {
              fieldName: "DISTRICTARNAME",
              visible: true,
              label: "الحى:",
            },
            {
              fieldName: "Area",
              visible: true,
              label: "المساحة:",
            },

            // Add more fields as needed
          ],
          content: [
            {
              type: "fields",
            },
          ],
        },
      });
      map.add(GardensProjectsFL);
      //------------------------------------------Govornance locations
      /*  const GovornanceFL = new FeatureLayer({
                url: "https://services8.arcgis.com/odFFccKWFi1AuXu9/ArcGIS/rest/services/Emtithal/FeatureServer/4",
                outFields: ["*"], // Fetch all fields for popup
                visible: false,
                popupTemplate: {
                    title: "المقرات الحكومية",
                    // Title field from the feature attributes

                    fieldInfos: [{
                        fieldName: "NO",
                        visible: true,
                        label: "الرقم:"
                    }, {
                        fieldName: "GovernmentalLocationName",
                        visible: true,
                        label: "اسم المقر :"
                    },
                    {
                        fieldName: "Municipality",
                        visible: true,
                        label: "البلدية:"
                    },
                    {
                        fieldName: "DistrictName",
                        visible: true,
                        label: "اسم الحي:"
                    }, {
                        fieldName: "StreetName",
                        visible: true,
                        label: "الشارع:"
                    },
                    {
                        fieldName: "XCOORDINATE",
                        visible: true,
                        label: "الاحداثيات الشرقية:"
                    }
                        ,
                    {
                        fieldName: "YCOORDINATE",
                        visible: true,
                        label: " الاحداثيات الشماليه:"
                    }, {
                        fieldName: "BuildingOwnershipType ",
                        visible: true,
                        label: "نوع ملكية المبنى:"
                    },
                    {
                        fieldName: "GovernmentalConnectorName ",
                        visible: true,
                        label: "ضابط اتصال الجهة الحكومية:"
                    }
                        ,
                    {
                        fieldName: "GovernmentalConnectorPhone ",
                        visible: true,
                        label: "جوال ضابط اتصال الجهة الحكومي:"
                    }
                        , {
                        fieldName: "AmanaConnectorName  ",
                        visible: true,
                        label: "اسم مندوب الأمانة:"
                    },
                    {
                        fieldName: "AmanaConnectorPhone  ",
                        visible: true,
                        label: "جوال مندوب الأمانة:"
                    }


                        // Add more fields as needed
                    ],
                    content: [

                        {
                            type: "fields"

                        }

                    ]
                }
            });
            map.add(GovornanceFL); */
      //------------------------------------------Environental services
      /*  const EnvironentalFL = new FeatureLayer({
                url: "https://services8.arcgis.com/odFFccKWFi1AuXu9/ArcGIS/rest/services/Emtithal/FeatureServer/5",
                outFields: ["*"], // Fetch all fields for popup
                visible: false,
                popupTemplate: {
                    title: "الخدمات البيئية",
                    // Title field from the feature attributes

                    fieldInfos: [{
                        fieldName: "FormNumber ",
                        visible: true,
                        label: "رقم الاستمار:"
                    }, {
                        fieldName: "NumberOfVisits ",
                        visible: true,
                        label: "عدد الزيارات:"
                    },
                    {
                        fieldName: "FacilityStatus",
                        visible: true,
                        label: "حالة المنشأة:"
                    },
                    {
                        fieldName: "MunicipalityName  ",
                        visible: true,
                        label: "سم البلدي:"
                    }, {
                        fieldName: "StreetName  ",
                        visible: true,
                        label: " اسم الشارع:"
                    },
                    {
                        fieldName: "ActualActivity ",
                        visible: true,
                        label: "النشاط الفعلي:"
                    },
                    {
                        fieldName: "FacilityDescription",
                        visible: true,
                        label: " وصف المنشأة:"
                    }, {
                        fieldName: "PostalCode",
                        visible: true,
                        label: "الرمز البريدي:"
                    },
                    {
                        fieldName: "MobilePhone",
                        visible: true,
                        label: "الجوال:"
                    },
                    {
                        fieldName: "Phone",
                        visible: true,
                        label: "الهاتف:"
                    }, {
                        fieldName: "MailBox",
                        visible: true,
                        label: "صندوق البريد:"
                    },
                    {
                        fieldName: "XCOORDINATE  ",
                        visible: true,
                        label: "الاحداثيات الشرقية:"
                    }
                        ,
                    {
                        fieldName: "YCOORDINATE",
                        visible: true,
                        label: "الاحداثيات الشمالية:"
                    }, {
                        fieldName: "COORDINATES",
                        visible: true,
                        label: "الإحداثيات:"
                    },
                    {
                        fieldName: "NameOnThePlate",
                        visible: true,
                        label: "الاسم في اللوح:"
                    },
                    {
                        fieldName: "Accuracy",
                        visible: true,
                        label: "الدقة:"
                    }, {
                        fieldName: "Comments",
                        visible: true,
                        label: "ملاحظات:"
                    },
                    {
                        fieldName: "District",
                        visible: true,
                        label: "الحي:"
                    },
                    {
                        fieldName: "LicenseActivity",
                        visible: true,
                        label: "نشاط الرخصة:"
                    }, {
                        fieldName: "MainActivity",
                        visible: true,
                        label: "النشاط الرئيسي:"
                    },
                    {
                        fieldName: "LicenseStatus   ",
                        visible: true,
                        label: "حالة الرخصة:"
                    }
                        ,
                    {
                        fieldName: "licenseNumber",
                        visible: true,
                        label: "رقم الرخصة:"
                    }, {
                        fieldName: "Facility",
                        visible: true,
                        label: "المنشأة:"
                    },
                    {
                        fieldName: "ComputerNumber",
                        visible: true,
                        label: "رقم الحاسب:"
                    },
                    {
                        fieldName: "IssueDate",
                        visible: true,
                        label: " تاريخ الإصدار:"
                    }, {
                        fieldName: "ExpiryDate",
                        visible: true,
                        label: "تاريخ الانتهاء:"
                    },
                    {
                        fieldName: "LicenseStatus2",
                        visible: true,
                        label: " حالة الرخصة:"
                    }
                        ,
                    {
                        fieldName: "IndustrialLicenseNumber",
                        visible: true,
                        label: " قم الرخصة الصناعية:"
                    }, {
                        fieldName: "FactoryCode",
                        visible: true,
                        label: "كود المصنع:"
                    },
                    {
                        fieldName: "IssueDate3",
                        visible: true,
                        label: " تاريخ الإصدار:"
                    },
                    {
                        fieldName: "ExpiryDate4",
                        visible: true,
                        label: "تاريخ الانتهاء:"
                    }, {
                        fieldName: "LicenseStatus5",
                        visible: true,
                        label: "حالة الرخصة:"
                    },
                    {
                        fieldName: "CommercialRegistry",
                        visible: true,
                        label: "سجل تجاري:"
                    },
                    {
                        fieldName: "IssueDate6",
                        visible: true,
                        label: "تاريخ الإصدار:"
                    }, {
                        fieldName: "ExpiryDate7",
                        visible: true,
                        label: " تاريخ الانتهاء:"
                    },
                    {
                        fieldName: "LicenseStatus8",
                        visible: true,
                        label: " حالة الرخصة:"
                    }
                        ,
                    {
                        fieldName: "IssueDate9",
                        visible: true,
                        label: "تاريخ الإصدار:"
                    },
                    {
                        fieldName: "CivilDefenseLicenseNumber",
                        visible: true,
                        label: "رقم رخص الدفاع المدني:"
                    }, {
                        fieldName: "ExpiryDate10",
                        visible: true,
                        label: " تاريخ الانتهاء:"
                    },
                    {
                        fieldName: "LicenseStatus11",
                        visible: true,
                        label: "حالة الرخصة:"
                    }
                        ,
                    {
                        fieldName: "IssueDate12",
                        visible: true,
                        label: " تاريخ الإصدار:"
                    }, {
                        fieldName: "EnvironmentalLicenseNumber",
                        visible: true,
                        label: "رقم رخص البيئة:"
                    },
                    {
                        fieldName: "ExpiryDate13",
                        visible: true,
                        label: "تاريخ الانتها:"
                    },
                    {
                        fieldName: "FacilityOwnerID",
                        visible: true,
                        label: " هوية مالك المنشأة:"
                    }, {
                        fieldName: "FacilityOwnerNam",
                        visible: true,
                        label: " اسم صاحب المنشأة:"
                    },
                    {
                        fieldName: "Phone14",
                        visible: true,
                        label: "الهاتف:"
                    }
                        ,
                    {
                        fieldName: "Nationality",
                        visible: true,
                        label: "جنسية:"
                    }, {
                        fieldName: "Mobile15",
                        visible: true,
                        label: "الجوال:"
                    },
                    {
                        fieldName: "Address",
                        visible: true,
                        label: "العنوان:"
                    },
                    {
                        fieldName: "Airpollution_GasEmissions",
                        visible: true,
                        label: "ثلوث الهواء/الانبعاثات الغازي:"
                    }, {
                        fieldName: "AirPollutionDustEmissionsDust",
                        visible: true,
                        label: "ثلوث الهواء/انبعاثات الأتربة/الغبار:"
                    },
                    {
                        fieldName: "LiquidWaste_IndustrialWaste",
                        visible: true,
                        label: "المخلفات السائلة/الصرف الصناعي:"
                    },
                    {
                        fieldName: "LiquidWaste_Sewage",
                        visible: true,
                        label: "المخلفات السائلة / الصرف الصحي:"
                    }, {
                        fieldName: "Solid_IndustrialWaste",
                        visible: true,
                        label: " المخلفات الصلبة/الصناعية:"
                    },
                    {
                        fieldName: "Solid_MunicipalWaste",
                        visible: true,
                        label: " المخلفات الصلبة/البلدية:"
                    }
                        ,
                    {
                        fieldName: "Soilpollution",
                        visible: true,
                        label: "تلوث التربة:"
                    }, {
                        fieldName: "SubActivity",
                        visible: true,
                        label: "النشاط الفرعي:"
                    },
                    {
                        fieldName: "VisitDate",
                        visible: true,
                        label: " تاريخ الزيارة:"
                    }
                        // Add more fields as needed
                    ],
                    content: [

                        {
                            type: "fields"

                        }

                    ]
                }
            });
            map.add(EnvironentalFL); */
      //-------------------------------------------------------------------------
      //------------------------------------------GardensProjects
      /* const GardenssurfaceProjectsFL = new FeatureLayer({
                url: "https://services8.arcgis.com/odFFccKWFi1AuXu9/ArcGIS/rest/services/Emtithal/FeatureServer/6",
                outFields: ["*"], // Fetch all fields for popup
                visible: false,
                popupTemplate: {
                    title: "مشاريع تنفيذ الحدائق",
                    // Title field from the feature attributes

                    fieldInfos: [{
                        fieldName: "PARCELNAME",
                        visible: true,
                        label: "الاسم:"
                    }, {
                        fieldName: "Municipality",
                        visible: true,
                        label: "البلدية:"
                    },
                    {
                        fieldName: "District",
                        visible: true,
                        label: "الحي:"
                    }

                        // Add more fields as needed
                    ],
                    content: [

                        {
                            type: "fields"

                        }

                    ]
                }
            });
            map.add(GardenssurfaceProjectsFL); */
      //------------------------------------------cameras
      const CarmerasFL = new FeatureLayer({
        url: "https://services6.arcgis.com/xxq56v5fuMeCokTb/arcgis/rest/services/Cameras/FeatureServer/0",
        outFields: ["*"], // Fetch all fields for popup
        visible: false,
        popupTemplate: {
          title: "كاميرات المراقبة",
          // Title field from the feature attributes

          fieldInfos: [
            {
              fieldName: "Serial",
              visible: true,
              label: "مسلسل:",
            },
            {
              fieldName: "Unit",
              visible: true,
              label: "الوحدة:",
            },
            {
              fieldName: "Type",
              visible: true,
              label: "نوع الموقع:",
            },
            {
              fieldName: "LocationName",
              visible: true,
              label: "اسم الموقع:",
            },
            {
              fieldName: "DISTRICTARNAME",
              visible: true,
              label: "الحي:",
            },
            {
              fieldName: "MUNICIPALITYARNAME",
              visible: false,
              label: "البلدية:",
            },
            {
              fieldName: "Lat",
              visible: true,
              label: "خط العرض:",
            },
            {
              fieldName: "Long",
              visible: true,
              label: "خط الطول:",
            },
            // Add more fields as needed
          ],
          content: [
            {
              type: "fields",
            },
          ],
        },
      });
      map.add(CarmerasFL);
      //------------------------------------------cameras
      /* const CoffeeFL = new FeatureLayer({
                url: "https://services8.arcgis.com/odFFccKWFi1AuXu9/ArcGIS/rest/services/Emtithal/FeatureServer/13",
                outFields: ["*"], // Fetch all fields for popup
                visible: false,
                popupTemplate: {
                    title: "المقاهي و الكافتريات",
                    // Title field from the feature attributes

                    fieldInfos: [{
                        fieldName: "Serial",
                        visible: true,
                        label: "مسلسل:"
                    }, {
                        fieldName: "Unit",
                        visible: true,
                        label: "الوحدة:"
                    },

                    {
                        fieldName: "Name",
                        visible: true,
                        label: "أسم المقهى:"
                    },
                    {
                        fieldName: "Type",
                        visible: true,
                        label: "نوع الموقع:"
                    },
                    {
                        fieldName: "OwnerName",
                        visible: true,
                        label: "أسم المالك:"
                    },
                    {
                        fieldName: "Status",
                        visible: true,
                        label: "حالة التصريح:"
                    },

                    {
                        fieldName: "DISTRICTARNAME",
                        visible: true,
                        label: "الحي:"
                    }, {
                        fieldName: "MUNICIPALITYARNAME",
                        visible: true,
                        label: "البلدية:"
                    },
                    {
                        fieldName: "Lat",
                        visible: true,
                        label: "خط العرض:"
                    }
                        ,
                    {
                        fieldName: "Long",
                        visible: true,
                        label: "خط الطول:"
                    }
                        // Add more fields as needed
                    ],
                    content: [

                        {
                            type: "fields"

                        }

                    ]
                }
            });
            map.add(CoffeeFL); */
      //------------------------------------------Tobacco cafes
      /* const TobaccoCoffeeFL = new FeatureLayer({
                url: "https://services8.arcgis.com/odFFccKWFi1AuXu9/ArcGIS/rest/services/Emtithal/FeatureServer/11",
                outFields: ["*"], // Fetch all fields for popup
                visible: false,
                popupTemplate: {
                    title: "المقاهي التبغ",
                    // Title field from the feature attributes

                    fieldInfos: [{
                        fieldName: "MUNICIPALITYARNAME",
                        visible: true,
                        label: "البلدية:"
                    }, {
                        fieldName: "DISTRICTARNAME",
                        visible: true,
                        label: "الحي:"
                    },
                    {
                        fieldName: "ST_NAME_AR",
                        visible: true,
                        label: "الشارع:"
                    }
                        , {
                        fieldName: "Name",
                        visible: true,
                        label: "اسم المقهى:"
                    },
                    {
                        fieldName: "Type",
                        visible: true,
                        label: "نوع التسجيل:"
                    }, {
                        fieldName: "Namber_1",
                        visible: true,
                        label: "رقم التسجيل:"
                    },
                    {
                        fieldName: "Name_1",
                        visible: true,
                        label: "أسم صاحب المقهى"
                    }
                        ,
                    {
                        fieldName: "nickname",
                        visible: true,
                        label: "المسمى:"
                    },
                    {
                        fieldName: "status",
                        visible: true,
                        label: "الحالة:"

                    },
                    {
                        fieldName: "X",
                        visible: true,
                        label: "احدثي سيني:"

                    }
                        ,
                    {
                        fieldName: "Y",
                        visible: true,
                        label: "احداثي صادي:"

                    }
                        // Add more fields as needed
                    ],
                    content: [

                        {
                            type: "fields"

                        }

                    ]
                }
            });
            map.add(TobaccoCoffeeFL); */
      //------------------------------------------Tobacco shopes
      /* const TobaccoshopeseFL = new FeatureLayer({
                url: "https://services8.arcgis.com/odFFccKWFi1AuXu9/ArcGIS/rest/services/Emtithal/FeatureServer/12",
                outFields: ["*"], // Fetch all fields for popup
                visible: false,
                popupTemplate: {
                    title: "محلات  التبغ",
                    // Title field from the feature attributes

                    fieldInfos: [

                        {
                            fieldName: "serial",
                            visible: true,
                            label: "مسلسل:"
                        },
                        {
                            fieldName: "MUNICIPALITYARNAME",
                            visible: true,
                            label: "البلدية:"
                        }, {
                            fieldName: "DISTRICTARNAME",
                            visible: true,
                            label: "الحي:"
                        },
                        {
                            fieldName: "ST_NAME_AR",
                            visible: true,
                            label: "الشارع:"
                        }
                        , {
                            fieldName: "name",
                            visible: true,
                            label: "اسم المحل:"
                        },
                        {
                            fieldName: "Type",
                            visible: true,
                            label: "نوع التسجيل:"
                        }, {
                            fieldName: "Number1",
                            visible: true,
                            label: "رقم التسجيل:"
                        },
                        {
                            fieldName: "OwnerName",
                            visible: true,
                            label: "أسم صاحب المحل"
                        }
                        ,
                        {
                            fieldName: "status",
                            visible: true,
                            label: "الحالة:"

                        },
                        {
                            fieldName: "Lat",
                            visible: true,
                            label: "احدثي سيني:"

                        }
                        ,
                        {
                            fieldName: "Long",
                            visible: true,
                            label: "احداثي صادي:"

                        }
                        // Add more fields as needed
                    ],
                    content: [

                        {
                            type: "fields"

                        }

                    ]
                }
            });
          map.add(TobaccoshopeseFL); */
    },
  };
});
