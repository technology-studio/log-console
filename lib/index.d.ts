declare module "@txo/log-console" {
    import { WriteLog } from '@txo-peer-dep/log';
    declare var LOGGER_KEY: string;
    declare var writeLog: WriteLog;
    declare var writeLogFactory: () => WriteLog;
}
