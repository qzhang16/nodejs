const userCount = () => {
    const count = db.Users.count();
    const entry =  {_id: Date(), n: count};
    db.UserCountHistory.insertOne(entry);
    print("\n Today's User Count: " + entry.n);
};
userCount();