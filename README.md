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
|mail|string|null: false|

### Association

- has_many :groups, through: menbers
- has_many :messages
- has_many :members


## groups table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unipue: true|
|

### Association

- has_many :users, through: members
- has_many :messages
- has_many :pictures


## messages table

|Column|Type|Options|
|------|----|-------|
|content|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|created_at|integer|null: false|

### Association

- belongs_to :user
- belongs_to :group


## pictures table

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|url|string|null: false|
|user_id|integer|null :false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association

- belongs_to :user
- belongs_to :group
