create database AppChat
go

use AppChat
go

create table users(
	id int primary key not null,
	firstname nvarchar(256),
	lastname nvarchar(256) not null,
	password varchar(256) not null,
	email varchar(256),
	phone varchar(256),
	birthday varchar(256),
	avatar varchar(256),
	createdDate date not null,
	updatedDate date,
	is_active bit not null,
	is_delete bit not null,
	status bit not null,
)
go

alter table friends(
	friend_id int primary key,
	id int foreign key references users(id),
	requestedDate date not null,
	approvedDate date,
	rejectedDate date,
	status int not null,
	is_active bit not null,
	is_block bit not null,
)
go

create table posts(
	post_id int primary key not null,
	id int foreign key references users(id) not null,
	friend_id int foreign key references friends(friend_id) not null,
	reaction int,
	title nvarchar(256) not null,
	content nvarchar(256) not null,
	createdDate date not null,
	updateDate date,
	status int not null,
)

select * from friends f join users u on u.id = f.id and u.id = 1 and f.status = 1 and f.requestedDate is not null