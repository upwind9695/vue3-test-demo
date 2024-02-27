export default [
    {
        url: "/api/mock/user/:id",
        method: "get",
        response: () => {
            return {
                id: "0001",
                name: "小明",
                email: "3333@qq.com"
            };
        },
    },

    {
        url: "/api/mock/users",
        method: "post",
        response: () => {
            return {
                code: 200,
                data: [{
                    id: "0001",
                    name: "小明",
                    email: "3333@qq.com"
                },{
                    id: "0002",
                    name: "小红",
                    email: "4444@qq.com"
                }],
                msg: "success",
            };
        },
    }
];
