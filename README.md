## group_users table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|

### Association

- belongs_to :group
- belongs_to :user


## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association

- has_many :groups, through: group_users
- has_many :messages
- has_many :group_users


## groups table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true, unipue: true|

### Association

- has_many :users, through: group_users
- has_many :members
- has_many :group_users


## messages table

|Column|Type|Options|
|------|----|-------|
|content|string|　|
|image|string|　|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group
