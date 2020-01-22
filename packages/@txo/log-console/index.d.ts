declare module "@txo/log-console" {
    import { WriteLog } from '@txo-peer-dep/log/Config';
    var LOGGER_KEY: string;
    var writeLog: WriteLog;
    var writeLogFactory: () => WriteLog;
}
