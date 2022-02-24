class AuthService {
    static BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    static async getAllHealths(user_id) {
        return fetch(`${this.BACKEND_URL}/api/health/user/${user_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error fetching health data!");
            })
            .then((res) => {
                return res
            });
    }

    static async deleteHealth(id) {
        return fetch(`${this.BACKEND_URL}/api/health/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error("Error deleting health data!");
            })
            .then((res) => {
                return res
            });
    }

    static async addHealth(data) {
        return fetch(`${this.BACKEND_URL}/api/health`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error("Error adding health record in!");
            })
            .then((res) => {
                return res;
            });
    }

    static async editHealth(id, data) {
        const res = await fetch(`${this.BACKEND_URL}/api/health/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        });
        return res.ok;
    }
}

export default AuthService;