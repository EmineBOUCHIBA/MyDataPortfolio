USE dwh_SportPlus;

/****** Object:  Table dbo.Product_Dim     ******/
DROP TABLE if exists Product_Dim;

CREATE TABLE Product_Dim(
	Product_ID bigint NOT NULL,
	Product_Line nvarchar(20) NULL,
	Product_Category nvarchar(25) NULL,
	Product_Group nvarchar(25) NULL,
	Product_Name nvarchar(45) NULL,
	Supplier_Country nvarchar(2) NULL,
	Supplier_Name nvarchar (30) NULL,
	Supplier_ID int NULL
)

