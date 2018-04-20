## members table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association

- belongs_to :group
- belongs_to :user


## users table

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unique: true|

### Association

- has_many :groups, through: menbers
- has_many :messages
- has_many :members


## groups table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unipue: true|

### Association

- has_many :users, through: members
- has_many :messages


## messages table

|Column|Type|Options|
|------|----|-------|
|content|string|　|
|images|string|　|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group
