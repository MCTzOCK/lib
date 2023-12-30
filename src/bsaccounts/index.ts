/**
 * src/bsaccounts/index.ts
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 30.12.2023
 *
 */

export const getRedirectUrl = (application_id: string) => {
  return `https://my.ben-siebert.com/authorize?id=${application_id}`;
};

export const getUserInfo = async (
  token: string,
): Promise<{
  error?: string;
  user?: {
    id: string;
    name: string;
    email: string;
    created_at: string;
  };
}> => {
  const res = await fetch("https://my.ben-siebert.com/api/get-user-info", {
    headers: {
      "X-ACCESS-TOKEN": token,
    },
  });
  const json = await res.json();

  if (res.status !== 200) {
    return {
      error: json.error,
    };
  }

  return {
    user: json.user,
  };
};

export const getProfilePictureUrl = (user_id: string) => {
  return `https://my.ben-siebert.com/api/pfp/${user_id}`;
};
