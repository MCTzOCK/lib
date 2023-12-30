/**
 * src/bsaccounts/index.ts
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 30.12.2023
 *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const getRedirectUrl = (application_id) => {
    return `https://my.ben-siebert.com/authorize?id=${application_id}`;
};
export const getUserInfo = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://my.ben-siebert.com/api/get-user-info", {
        headers: {
            "X-ACCESS-TOKEN": token,
        },
    });
    const json = yield res.json();
    if (res.status !== 200) {
        return {
            error: json.error,
        };
    }
    return {
        user: json.user,
    };
});
export const getProfilePictureUrl = (user_id) => {
    return `https://my.ben-siebert.com/api/pfp/${user_id}`;
};
//# sourceMappingURL=index.js.map