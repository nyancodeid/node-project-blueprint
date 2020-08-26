import { Signale } from "signale";

const SIGNALE_OPTIONS = {};

export const signale = new Signale(SIGNALE_OPTIONS);

/**
 * @private
 * @param {string|string[]} services
 * @param {string} message
 * @return {string}
 */
const _writeLog = function (services, message) {
  const type = this.type;

  if (!signale[type])
    throw new Error(`Signale method "${type}" are unavailable`);

  services = typeof services === "string" ? [services] : services;

  const logName = services.map((service) => `[${service}]`).join("");
  const logMessage = `${logName} ${message}`;

  signale[type](logMessage);

  return logMessage;
};

/**
 * Log info with service name
 * @function
 * @return {string}
 */
export const logInfo = _writeLog.bind({ type: "info" });
/**
 * Log Success with service name
 * @function
 * @return {string}
 */
export const logSuccess = _writeLog.bind({ type: "success" });
/**
 * Log Error with service name
 * @function
 * @return {string}
 */
export const logError = _writeLog.bind({ type: "error" });
