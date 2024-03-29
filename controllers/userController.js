const { User } = require('../models');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find({});
      res.json(users);
    } catch(err) {
      res.status(500).json(err)
    };
  },

  async getUserById(req, res) {
    try {
      const user = await User.findById({req, params, userId});
      if (!user) {
        res.status(404).json({message: 'User not found!'});
      } else {
        req.json(user);
      }
    } catch (err) {
      res.status(500).json(err)
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      if (!user) {
        res.status(404).json({message: 'User could not be created'});
      } else {
        res.json(user);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUserById(req, res) {
    try {
      const user = await User.findOneAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!user) {
        res.status(404).json({message: 'User could not be updated'});
      } else {
        res.json(user);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteUserById(req, res) {
    try {
      const user = await User.findOneAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({message: 'User not deleted!'});
      }
      res.json({message: 'User deleted!'});
    } catch(err) {
      res.status(500).json(err);
    }
  },

  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        {_id: req.params.userId},
        {$addToSet: { friends: req.body.friendId || req.params.friendId}},
        {new: true}
      );
      if (!user) {
        return res.status(404).json({message: 'Friend not added'});
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removeFriend({ params }, res) {
    try {
      const user = await User.findOneAndUpdate(
        {_id: params.userId},
        {$pull: {friends: params.friendId }},
        {new: true}
      );
      if (!dbUserData) {
        return res.status(404).json({message: 'Friend not found/deleted'});
      }
      const removed = !dbUserData.friends.includes(params.friendId);
      if (removed) {
        res.json({ message: "Friend removed successfully!", dbUserData });
      } else {
        res.json(dbUserData);
      }
    } catch(err) {
      res.status(400).json(err);
    }
  },
};
//const UserController = {
  // getAllUsers(req, res) {
  //   User.find({})
  //     .then(userData => res.json(userData))
  //     .catch(err => res.status(500).json(err));
  // },
//  getUserById(req, res) {
//     User.findById(req.params.userId)
//       .then(userData => res.json(userData))
//       .catch(err => res.status(500).json(err));
//   },
  // createUser(req, res) {
  //   User.create(req.body)
  //     .then(userData => res.json(userData))
  //     .catch(err => res.status(500).json(err));
  // },
  // updateUserById(req, res) {
  //   User.findOneAndUpdate(req.params.id, req.body, { new: true })
  //     .then(userData => {
  //       if (!userData) {
  //         return res.status(404).json({ message: 'User not found' });
  //       }
  //       res.json(userData);
  //     })
  //     .catch(err => res.status(500).json(err));
  // },
  // deleteUserById(req, res) {
  //   User.findOneAndDelete(req.params.id)
  //     .then(userData => {
  //       if (!userData) {
  //         return res.status(404).json({ message: 'User not found' });
  //       }
  //       res.json({ message: 'User deleted successfully' });
  //     })
  //     .catch(err => res.status(500).json(err));
  // },
  // addFriend(req, res) {
  //   User.findOneAndUpdate(
  //     { _id: req.params.userId },
  //     { $addToSet: { friends: req.body.friendId || req.params.friendId} },
  //     { new: true }
  //   )
  //     .then(userData => {
  //       if (!userData) {
  //         return res.status(404).json({ message: 'User not found' });
  //       }
  //       res.json(userData);
  //     })
  //     .catch(err => res.status(500).json(err));
  // },
  // removeFriend({ params }, res) {
  //   User.findOneAndUpdate(
  //     { _id: params.userId },
  //     { $pull: { friends: params.friendId } },
  //     { new: true }
  //   )
  //     .then((dbUserData) => {
  //       if (!dbUserData) {
  //         return res.status(404).json({ message: "No user with this id!" });
  //       }
        
  //       const removed = !dbUserData.friends.includes(params.friendId);
  //       if (removed) {
  //         res.json({ message: "Friend removed successfully!", dbUserData });
  //       } else {
  //         res.json(dbUserData);
  //       }
  //     })
  //     .catch((err) => res.status(400).json(err));
  // },
//};

//module.exports = UserController;
