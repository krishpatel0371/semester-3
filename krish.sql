create database CSE_3B_350



create table deposite(ActNo int , Cname varchar(50),Bname varchar(50),Amount decimal(8,2),Adate datetime )



INSERT INTO deposite values(101,'sunil','vrce',1000,'1995-3-1')
INSERT INTO deposite values(102,'Anil','Ajni',5000,'1996-1-4')
INSERT INTO deposite values(103,'Mehul','Karolbagh',3500,'1995-11-17')
INSERT INTO deposite values(104,'Madhuri','Chandi',1200,'1995-12-17')
INSERT INTO deposite values(105,'Promd','M.G. Road',3000,'1996-3-27')
INSERT INTO deposite values(106,'Sandip','Andheri',2000,'1996-3-31')
INSERT INTO deposite values(107,'Shivani','Virar',1000,'1995-9-5')
INSERT INTO deposite values(108,'Kranti','Neharu place',5000,'1995-7-2')
INSERT INTO deposite values(109,'Minu','Powai',7000,'1995-8-10')

select * From deposite

--table 2


create table branch( Bname Varchar(50), City Varchar(50) )

INSERT INTO branch values('Vrce','Nagpur')
INSERT INTO branch values('Ajni','Nagpur')
INSERT INTO branch values('Karlobhag','Delhi')
INSERT INTO branch values('Chandi','Delhi')
INSERT INTO branch values('Dharampeth','Nagpur')
INSERT INTO branch values('M.G. Road','Banglore')
INSERT INTO branch values('Andheri','Bombay')
INSERT INTO branch values('Virar','Bombay')
INSERT INTO branch values('Neharu Place','Delhi')
INSERT INTO branch values('Powai','Bombay')

select * from branch

--Borrow

create table Borrow( Loanno int, Cname Varchar(50),Bname Varchar(50),Amount decimal(8,2) )

INSERT INTO Borrow values
(201 , 'anil','Vrce',1000),
(206 , 'anil','Ajni',5000),
(311 , 'sunil','Dharampeth',3000),
(311 , 'sunil','Dharampeth',3000),
(321 , 'Madhuri','Andheri',2000),
(375, 'PRAMOD', 'VIRAR', 8000.00),
(481, 'KRANTI',' NEHRU PLACE', 3000.00)  

select * from Borrow

--customers

create table customers( cname Varchar(50), City Varchar(50) )

INSERT INTO customers values('Anil','Calcutta')
INSERT INTO customers values('Sunil','Delhi')
INSERT INTO customers values('Mehul','Baroda')
INSERT INTO customers values('Mandar','Patna')
INSERT INTO customers values('Madhuri','Nagpur')
INSERT INTO customers values('Pramod','Nagpur')
INSERT INTO customers values('Sandip','surat')
INSERT INTO customers values('Shivani','Bombay')
INSERT INTO customers values('Kranti','Bombay')
INSERT INTO customers values('Naren','Bombay')

select * from customers

-------lab 2 --------
-----part A-------

-- 1) Retrieve all data from table DEPOSIT. 
		select * from deposite

-- 2) Retrieve all data from table CUSTOMERS. 
		select * from Customers

-- 3) Retrieve all data from table BORROW. 
		select * from Borrow

-- 4) Display Account No, Customer Name & Amount from DEPOSIT
		Select Actno , Cname , Amount from deposite

-- 5) Display Loan No, Amount from BORROW.
		select Lonno , Amount from Borrow

-- 6) Display loan details of all customers who belongs to ‘ANDHERI’ branch from borrow table.
		Select * from Borrow where Bname = 'Andheri'

-- 7) account no and amount of depositor, whose account no is equals to 106 from deposit table
		Select Actno, Amount from deposite WHERE Actno=106

-- 8) name of borrowers having amount greater than 5000 from borrow table. 
		Select Cname From Borrow where Amount>5000

-- 9) Give name of customers who opened account after date '1-12-96' from deposit table. 
		Select Bname from deposite where Adate > '1996-12-1'

-- 10) Display name of customers whose account no is less than 105 from deposit table.
		select Cname from deposite where Actno<105

-- 11) Display name of customer who belongs to either ‘NAGPUR’ or ‘DELHI’ from customer table. (OR & IN)
		select Cname from customers where city='Nagpur' or city='Delhi'

		select Cname from customers where city in('Nagpur','Delhi')

-- 12) Display name of customers with branch whose amount is greater than 4000 and account no is less than 105 from deposit table.
		select Cname,Bname from deposite Where Amount > 4000 And Actno<105

-- 13) Find all borrowers whose amount is greater than equals to 3000 & less than equals to 8000 from borrow table. (AND & BETWEEN)
		select * from Borrow where Amount>=3000 And Amount <=8000
		select * from Borrow where Amount between 3000 And 8000
-- 14) Find all depositors who do not belongs to ‘ANDHERI’ branch from deposit table.
		select * from deposite where Cname!='ANDHERI'
		select * from deposite where Cname<>'ANDHERI'
-- 15) Display Account No, Customer Name & Amount of such customers who belongs to ‘AJNI’, ‘KAROLBAGH’ Or ‘M.G.ROAD’ and Account No is less than 104 from deposit table.
		select Actno,Cname,Amount From deposite where Bname in ('Ajni','Karolbagh','M.g.Road') And Actno<104

------part B-----

-- 1) Display all the details of first five customers from deposit table
		select top 5 * from deposite
-- 2) Display all the details of first three depositors whose amount is greater than 1000.
		select top 3 * from deposite where Amount >1000
-- 3) Display Loan No, Customer Name of first five borrowers whose branch name does not belongs to ‘ANDHERI’ from borrow table.
		select top 5 Lonno,Cname from Borrow where bname<>'Andheri'
-- 4) Retrieve all unique cities using DISTINCT. (Use Customers Table)
		select Distinct city from customers
-- 5) Retrieve all unique branches using DISTINCT. (Use Branch Table)
		select distinct Bname from Branch

-------part C--------

-- 1) Retrieve top 50% record from table BORROW.
		select top 50 percent * from Borrow
-- 2) Display top 10% amount from table DEPOSIT.
		select top 10 percent Amount from deposite
-- 3) Display top 25% customer who deposited more than 5000.
		select top 25 percent Cname from deposite where Amount>5000
-- 4) Retrieve first 10% Loan Amounts.
		select top 10 Lonno from Borrow
-- 5) Retrieve all unique customer names with city.
		select DISTINCT Cname ,city from customers
-- 6) Retrieve all Loan records with one more column in Loan Amount as 10% extra amount.
		select amount ,amount*1.10 from Borrow 
-- 7) Retrieve all odd/even value loan number from Borrow table.
		select lonno from Borrow where lonno%2=0
		select lonno from Borrow where lonno%2=1

------lab 3-----

-----part A------

create table Cricket(Name varchar(50),city varchar(50),age int)


insert into cricket values
 
( 'Sachin Tendulkar',' Mumbai', 30),
('Rahul Dravid' ,'Bombay ',35),
('M. S. Dhoni',' Jharkhand', 31),
('Suresh Raina' ,'Gujarat' ,30)

select * from Cricket

-- 1) Create table Worldcup from cricket with all the columns and data
		select * into worldcup from Cricket
		select * from worldcup

-- 2) Create table T20 from cricket with first two columns with no data.
		select name,city into t20 from Cricket where 1=2
		select * from t20


-- 3) Create table IPL From Cricket with No Data
		select * into ipl from cricket where 2+2=5
		select * from ipl


-------part B--------

create table employee(Name varchar(50),city varchar(50),age int)

insert into employee values
('jay Patel',' Rajkot', 30),
('Rahul Dave',' Baroda' ,35),
('Jeet Patel',' Surat', 31),
('Vijay Raval',' Rajkot', 3)



select * from employee


-- 1) Create table Employee_detail from Employee with all the columns and data.
		select * into Employee_detail from employee
		select * from Employee_detail

-- 2) Create table Employee_data from Employee with first two columns with no data.
		select name,city into Employee_data from Employee where 1=2
		select * from Employee_data

-- 3) Create table Employee_info from Employee with no Data
		select * into employee_info from employee where 2+2=5
		select * from Employee_info

-------Update Operation-------

-- 1) Update deposit amount of all customers from 3000 to 5000. (Use Deposit Table)
		update deposite set Amount=5000  where Amount=3000 
		select * from deposite

-- 2) Change branch name of ANIL from VRCE to C.G. ROAD. (Use Borrow Table)
		update borrow set Bname = 'C.G.road' where bname='vrce' and cname='anil'
		select * from Borrow

-- 3) Update Account No of SANDIP to 111 & Amount to 5000. (Use Deposit Table)
		update deposite set ActNo=111,Amount=5000 where Cname='sandip'

-- 4) Update amount of KRANTI to 7000. (Use Deposit Table)
		update deposite set Amount=7000 where cname='kranti'

-- 5) Update branch name from ANDHERI to ANDHERI WEST. (Use Branch Table)
		update branch set bname='Andheri west' where Bname='andheri'

-- 6) Update branch name of MEHUL to NEHRU PALACE. (Use Deposit Table)
		update deposite set bname = 'nehru place' where cname='mehul'

-- 7) Update deposit amount of all depositors to 5000 whose account no between 103 & 107. (Use DepositTable)
		update deposite set Amount=5000 where ActNo between 103 and 107

-- 8) Update ADATE of ANIL to 1-4-95. (Use Deposit Table)
		update deposite set Adate='1995-4-1' where Cname='anil'

-- 9) Update the amount of MINU to 10000. (Use Deposit Table)
		update deposite set Amount=10000 where cname='Minu'

-- 10) Update deposit amount of PRAMOD to 5000 and ADATE to 1-4-96 (Use Deposit Table)
		update deposite set Amount =5000,Cname='pramod' ,  Adate='1996-4-1' where cname = 'promd'

select * from deposite


--1. Give 10% Increment in Loan Amount. (Use Borrow Table)
select amount ,amount*1.10 from Borrow

--2. Customer deposits additional 20% amount to their account, update the same. (Use Deposit Table)
select amount ,amount*1.20 from deposite

--Update amount of loan no 321 to NULL. (Use Borrow Table)
update borrow set Loanno=null where Loanno=321
select * from borrow

--2. Update branch name of KRANTI to NULL (Use Borrow Table)
update borrow set Cname=null where cname = 'kranti'

--3. Display the name of borrowers whose amount is NULL. (Use Borrow Table)
select * from borrow where amount is null

--display the Borrowers whose having branch. (Use Borrow Table)
selecT bname from Borrow

--5. Update the Loan Amount to 5000, Branch to VRCE & Customer Name to Darshan whose loan no is 481.(Use Borrow Table)
updATE BORROW set Amount=5000, bname='vrce' ,cname='darshan' where loanno=481

--Update the Deposit table and set the date to 01-01-2021 for all the depositor whose amount is less than 2000.
update deposite set Adate='2021-1-1' where Amount<2000
select * from deposite

--7. Update the Deposit table and set the date to NULL & Branch name to ‘ANDHERI whose Account No is 110
update deposite set Adate=null, bname='andheri' where ActNo=111




--1. Add two more columns City VARCHAR (20) and Pincode INT.

Alter table deposite add city Varchar(20) , pincode int
select * from deposite

--2. Change the size of CNAME column from VARCHAR (50) to VARCHAR (35).
	
alter table deposite alter column city varchar(50)

--3. Change the data type DECIMAL to INT in amount Column.

alter table deposite alter column Amount int 

--4. Rename Column ActNo to ANO.
sp_rename 'deposite.ActNo','Ano'

--5. Delete Column City from the DEPOSIT table.
alter table deposite drop column city

--6. Change name of table DEPOSIT to DEPOSIT_DETAIL.
sp_rename 'deposite','deposite_detail'


--1. Rename Column ADATE to AOPENDATE OF DEPOSIT_DETAIL table.
sp_rename 'deposite_detail.Adate','AOPENDATE'

--2. Delete Column AOPENDATE from the DEPOSIT_DETAIL table.
alter table Deposite_detail drop column Aopendate

--3. Rename Column CNAME to CustomerName.
sp_rename 'deposite_detail.Cname','Customername'




create table Student_detail(Enrollment_no varchar(20),Name varchar(25),cpi decimal(5,2),birthdate Datetime)

select * from Student_detail

--1. Add two more columns City VARCHAR (20) (Not null) and Backlog INT (Null).
alter table student_detail

--2. Change the size of NAME column of student_detail from VARCHAR (25) to VARCHAR (35).
alter table student_detail alter column name varchar(35)

--3. Change the data type DECIMAL to INT in CPI Column.
--4. Rename Column Enrollment_No to ENO.
--5. Delete Column City from the student_detail table.
--6. Change name of table student_detail to STUDENT_MASTER





--1. Delete all the records of DEPOSIT_DETAIL table having amount greater than and equals to 4000.
delete from deposite_detail where Amount>=4000
select * from deposite_detail

--2. Delete all the accounts CHANDI BRANCH.
delete from deposite_detail where Bname='chandi'

--3. Delete all the accounts having account number (ANO) is greater than 105.
delete from deposite_detail where Ano<105


--4. Delete all the records of Deposit_Detail table. (Use Truncate)
truncate table Deposite_detail

--5. Remove Deposit_detail table. (Use Drop)

drop table deposite_detail  




create table employee_master(
EmpNo INT,
EmpName VARCHAR(25),
JoiningDate DATETIME,
Salary DECIMAL (8,2),
City VARCHAR(20))

insert into employee_master values
 
(101,'Keyur','2002-1-5', 12000.00,'Rajkot'),
(102 ,'Hardik','2004-2-15', 14000.00 ,'Ahmedabad'),
(103,'Kajal','2006-3-14', 15000.00,'Baroda'),
(104,'Bhoomi','2005-6-23', 12500.00,'Ahmedabad'),
(105,'Harmit','2004-2-15', 14000.00,'Rajkot'),
(106,'Mitesh','2001-9-25', 5000.00,'Jamnagar'),
(107,'Meera', Null, 7000.00,'Morbi'),
(108,'Kishan' ,'2003-2-6', 10000.00,NULL)

select * from employee_master

--1. Delete all the records of Employee_MASTER table having salary greater than and equals to 14000.
delete from employee_master where Salary>=14000

--2. Delete all the Employees who belongs to ‘RAJKOT’ city.
delete from employee_master where city = 'rajkot'

--3. Delete all the Employees who joined after 1-1-2007.
delete from employee_master where JoiningDate >'2007-1-1'

--4. Delete the records of Employees whose joining date is null and Name is not null.
delete from employee_master where JoiningDate is null And EmpName is not null

--5. Delete the records of Employees whose salary is 50% of 20000.
delete from employee_master where Salary = 0.5*20000

--6. Delete the records of Employees whose City Name is not empty.
delete from  employee_master where city is not null

--7. Delete all the records of Employee_MASTER table. (Use Truncate)
truncate table employee_master
--8. Remove Employee_MASTER table. (Use Drop)
drop table employee_master

--delete  :- to delete row data
--truncate :- to delete all data
--drop :- delete all table




-----Lab 5------

----part A-----

create table student (
StuID INT,
FirstName VARCHAR(25),
LastName VARCHAR(25),
Website VARCHAR(50),
City VARCHAR(25),
Address VARCHAR(100))


insert into student values 
(1011,'Keyur','Patel','techonthenet.com','Rajkot','A-303 ''Vasant Kunj'', Rajkot'),
(1022 ,'Hardik','Shah','digminecraft.com','Ahmedabad' ,'"Ram Krupa", Raiya Road'),
(1033,'Kajal','Trivedi','bigactivities.com','Baroda','Raj bhavan plot , near garden'),
(1044,'Bhoomi','Gajera','checkyourmath.com','Ahmedabad','"Jig''s Home",Narol'),
(1055,'Harmit','Mitel','@me.darshan.com','Rajkot','B-55, Raj Residency'),
(1066,'Ashok','Jani', NULL,'Baroda','A502, Club House Building')

truncate table  student

select * from student


--1. Display the name of students whose name starts with ‘k’.

		select * from student where  FirstName like 'k%'

--2. Display the name of students whose name consists of five characters.

		select * from student where FirstName like '_____'

--3. Retrieve the first name & last name of students whose city name ends with a & contains six characters.

		select FirstName from student where city like '_____a'

--4. Display all the students whose last name ends with ‘tel’.

		select * from student where LastName like '%tel'

--5. Display all the students whose first name starts with ‘ha’ & ends with‘t’.

		select * from student where FirstName like 'ha%t'
 
--6. Display all the students whose first name starts with ‘k’ and third character is ‘y’.

		select * from student where FirstName like 'k_y%'

--7. Display the name of students having no website and name consists of five characters.

		select * from student where Website is null and FirstName like '_____'

--8. Display all the students whose last name consist of ‘jer’.

		select * from student where LastName like '%jer%'

--9. Display all the students whose city name starts with either ‘r’ or ‘b’.

		select * from student where city like '[r,b]%'

--10. Display all the name students having websites.

		select * from student where Website is not null

--11. Display all the students whose name starts from alphabet A to H.

		select * from student where FirstName like '[a-h]%' 

--12. Display all the students whose name’s second character is vowel.

		select * from student where FirstName like '_[a,e,i,o,u]%'

--13. Display the name of students having no website and name consists of minimum five characters.


		select * from student where Website is null and FirstName like '_____%'


--14. Display all the students whose last name starts with ‘Pat’.

		select * from student where LastName like 'pat%'

--15. Display all the students whose city name does not starts with ‘b’.

		select * from student where city not like 'b%' 

-----Part B------

--1. Display all the students whose name starts from alphabet A or H.

		select * from student where FirstName like '[a,h]%'

--2. Display all the students whose name’s second character is vowel and of and start with H.

		select * from student where  FirstName like 'h[a,e,i,o,u]%'

--3. Display all the students whose last name does not ends with ‘a’.

		select * from student where LastName not like '%a'

--4. Display all the students whose first name starts with consonant.

		select * from student where FirstName not like '[a,e,i,o,u]%'

--5. Display all the students whose website contains .net

		select * from student where Website like '%net%' 


-----Part C------

--1. Display all the students whose address consist of -.

		select * from student where Address like '%-%'

--2. Display all the students whose address contains single quote or double quote.

		select * from student where Address like '%''%' or Address like '%"%'

--3. Display all the students whose website contains @.

		select * from student where Website like '%@%'

--4. Display all the names those are either four or five characters.

		select * from student where FirstName like '____' or FirstName like '_____'

-----Lab 7------
-----Part A----

create table EMP(
Eid int,
Ename varchar(50),
Department varchar(20),
Salary decimal(8,2),
joiningdate varchar(50),
city varchar(50))

insert into EMP values
(101,'Rahul','Admin',56000,'1990-Jan-1','Rajkot'),
(102,'Hardik','IT',18000,'1990-Sep-25','Ahmedabad'),
(103,'Bhavin','HR',25000,'1991-May-14','Baroda'),
(104,'Bhoomi','Admin',39000,'1991-Feb-8','Rajkot'),
(105,'Rohit','IT',17000,'1990-Jul-23','Jamnagar'),
(106,'Priya','IT',9000,'1990-Oct-18','Ahmedabad'),
(107,'Bhoomi','HR',34000,'1991-Dec-25','Rajkot')


select * from EMP


--1. Display the Highest, Lowest, Label the columns Maximum, Minimum respectively.

		select max(salary) AS Maximum , MIN(salary) as minimum from emp

--2. Display Total, and Average salary of all employees. Label the columns Total_Sal and Average_Sal, respectively.

		select sum(salary) as Total_sum , avg(salary) as Average_sal from emp

--3. Find total number of employees of EMPLOYEE table.

		select count(Eid) from emp

--4. Find highest salary from Rajkot city.

		select max(salary) from emp where city='rajkot'

--5. Give maximum salary from IT department.

		select min(salary) from emp where Department='it'

--6. Count employee whose joining date is after 8-feb-91.

		select count(eid) from emp where joiningdate>'1991-2-8'

--7. Display average salary of Admin department.

		select avg(salary) from emp where Department = 'admin'

--8. Display total salary of HR department.

		select sum(salary) from emp where Department = 'hr'

--9. Count total number of cities of employee without duplication.

		select count(distinct city) from emp

--10. Count unique departments.

		select count(distinct Department) from emp

--11. Give minimum salary of employee who belongs to Ahmedabad.

		select min(salary) from emp where city='Ahmedabad'

--12. Find city wise highest salary.

		select city,max(salary)
		from emp
		group by city

--13. Find department wise lowest salary.

		select department,min(salary)
		from emp
		group by Department

--14. Display city with the total number of employees belonging to each city.

		select city,count(city) 
		from emp
		group by city

--15. Give total salary of each department of EMP table.

		select department,sum(salary) as total_salary
		from emp
		group by Department

--16. Give average salary of each department of EMP table without displaying the respective department name.

		select avg(salary)
		from emp
		group by department


------Part – B:- -------
--1. Count the number of employees living in Rajkot.

		select count(eid) from emp where city='rajkot'

--2. Display the difference between the highest and lowest salaries. Label the column DIFFERENCE.

		select max(salary)-min(salary) as differnce from emp

--3. Display the total number of employees hired before 1st January, 1991.

		select count(eid) from emp where joiningdate<'1991-1-1'

-----Part – C:----
--1. Count the number of employees living in Rajkot or Baroda.

		select count(Eid) from emp where city='rajkot' or city ='baroda'

--2. Display the total number of employees hired before 1st January, 1991 in IT department.

		select count(Eid) from emp where joiningdate<'1991-1-1'and department = 'it'

--3. Find the Joining Date wise Total Salaries.

		Select sum(salary) from emp 
		group by joiningdate

--4. Find the Maximum salary department & city wise in which city name starts with ‘R’.

		select max(salary) as department from emp
		where city like 'r%'
		group by city,department

----lab 8-----


select * from sales_data

-----Part – A:------
--1. Display Total Sales Amount by Region.

		select region,sum(sales_amount)
		from sales_data
		group by region


--2. Display Average Sales Amount by Product

		select product,avg(sales_amount)
		from sales_data
		group by product

--3. Display Maximum Sales Amount by Year

		select year, max(sales_amount)
		from sales_data
		group by year

--4. Display Minimum Sales Amount by Region and Year

		select year,region, min(sales_amount)
		from sales_data
		group by year,region

--5. Count of Products Sold by Region

		select  count(sales_amount)
		from sales_data
		group by region

--6. Display Sales Amount by Year and Product

		select sum(sales_amount),year,product
		from sales_data 
		group by year,product

--7. Display Regions with Total Sales Greater Than 5000

		select region,sum(sales_amount)
		from sales_data
		group by region
		having sum(sales_amount)>5000

--8. Display Products with Average Sales Less Than 10000

		select product,avg(sales_amount)
		from sales_data
		group by product
		having avg(sales_amount)<10000

--9. Display Years with Maximum Sales Exceeding 500

		select year,max(sales_amount)
		from sales_data
		group by year
		having max(sales_amount)>500

--10. Display Regions with at Least 3 Distinct Products Sold.

		select region,count(distinct sales_amount)
		from sales_data
		group by region
		having count(distinct sales_amount)<4

--11. Display Years with Minimum Sales Less Than 1000

		select year,min(sales_amount)
		from sales_data
		group by year
		having min(sales_amount)<1000

--12. Display Total Sales Amount by Region for Year 2023, Sorted by Total Amount

		select region,sum(sales_amount)
		from sales_data
		where year=2023
		group by region
		order by sum(sales_amount)
		
--Part – B:------
--1. Display Count of Orders by Year and Region, Sorted by Year and Region

	select count(product),year,region from Sales_data
	group by year,region
	order by year,region

--2. Display Regions with Maximum Sales Amount Exceeding 1000 in Any Year, Sorted by Region
	
	select max(Sales_Amount),region from Sales_data
	group by region
	having max(Sales_Amount)>1000
	order by region 

--3. Display Years with Total Sales Amount Less Than 1000, Sorted by Year Descending

	select sum(Sales_amount),year from Sales_data
	group by year
	having sum(Sales_Amount)<1000
	order by year desc

---4. Display Top 3 Regions by Total Sales Amount in Year 2024

	select top 3 region ,sum(sales_amount) from Sales_data
	where year=2024
	group by region

---Part – C:
--1. Display Products with Average Sales Amount Between 1000 and 2000, Ordered by Product Name

	select product,avg(sales_amount) from Sales_data
	group by product
	having avg(sales_amount) between 1000 and 2000
	order by Product

--2. Display Years with More Than 5 Orders from Each Region

	select year,count(product) from Sales_data
	group by region,year
	having count(product)>5

--3. Display Regions with Average Sales Amount Above 1500 in Year 2023 sort by amount in descending.

	select region,avg(sales_amount) from Sales_data
	where year=2023
	group by region
	having avg(sales_amount)>1500
	order by avg(sales_amount) desc

--4. Find out region wise duplicate product.

	select region,Product,count(Product) from Sales_data
	group by region,product
	having count(product) >=2
	order by region

--5. Find out region wise highest sales amount

	select region,max(sales_amount) from Sales_data
	group by region 




 