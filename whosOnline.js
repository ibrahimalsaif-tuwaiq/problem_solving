const whosOnline = (friends) => {
  let online = [];
  let offline = [];
  let away = [];
  let result = {};

  friends.forEach((friend) => {
    if (friend.status === "online") {
      if (friend.lastActivity > 10) {
        away.push(friend.username);
      } else {
        online.push(friend.username);
      }
    } else if (friend.status === "offline") {
      offline.push(friend.username);
    }
  });

  if (online.length) {
    result.online = online;
  }
  if (offline.length) {
    result.offline = offline;
  }
  if (away.length) {
    result.away = away;
  }

  return result;
};

const friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

console.log(whosOnline(friends)) // { online: [ 'David' ], offline: [ 'Lucy' ], away: [ 'Bob' ] }

