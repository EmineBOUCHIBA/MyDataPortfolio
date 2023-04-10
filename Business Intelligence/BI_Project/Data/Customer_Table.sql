DROP TABLE IF EXISTS `Customer`;
CREATE TABLE `Customer` (
  `Customer_ID` decimal(6,1) DEFAULT NULL,
  `Country` varchar(29) DEFAULT NULL,
  `Gender` varchar(19) DEFAULT NULL,
  `Personal_ID` varchar(24) DEFAULT NULL,
  `Customer_Name` smallint(6) DEFAULT NULL,
  `Customer_FirstName` varchar(2) DEFAULT NULL,
  `Customer_LastName` varchar(19) DEFAULT NULL,
  `Birth_Date` varchar(19) DEFAULT NULL,
  `Customer_Address` varchar(19) DEFAULT NULL,
  `Street_ID` varchar(19) DEFAULT NULL,
  `Customer_Type_ID` varchar(19) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

