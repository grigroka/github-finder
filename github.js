'use strict';
class GitHub {
  constructor() {
    this.client_id = '91c20f9143350c5a15cb';
    this.client_secret = '7a74a06bf05415e6b8712ed665513f818a877e7a';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    return {
      profile
    };
  }
}
