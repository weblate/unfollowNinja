import type { UserCategory } from '../dao/dao';

export type Lang = 'fr' | 'en' | 'es' | 'pt';

export interface IFollowerInfo {
    id: string;
    followTime: number;
}

export interface IUnfollowerInfo extends IFollowerInfo {
    unfollowTime: number;
    followDetectedTime: number; // first time the system saw the follower
    blocking?: boolean;
    blocked_by?: boolean;
    suspended?: boolean;
    locked?: boolean;
    deleted?: boolean;
    following?: boolean;
    followed_by?: boolean;
    friendship_error_code?: number;
    notified_time?: number;
    username?: string;
}

export interface ITwittoInfo {
    id: string;
    username: string;
}

export interface IUserParams {
    added_at: number; // in ms
    lang: Lang;
    token: string;
    tokenSecret: string;
    dmId?: string;
    dmToken?: string;
    dmTokenSecret?: string;
}

export interface IUserEgg extends ITwittoInfo, IUserParams {
    category?: UserCategory;
}

export interface Session {
    user?: IUserEgg & { dmUsername?: string };
}
