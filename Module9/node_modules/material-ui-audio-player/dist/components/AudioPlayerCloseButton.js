"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useComponentStyles = void 0;
var React = __importStar(require("react"));
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var classnames_1 = __importDefault(require("classnames"));
exports.useComponentStyles = makeStyles_1.default({
    icon: function (props) { return ({
        color: props.playerColors.active,
        position: 'absolute',
        top: 2,
        right: 2,
        fontSize: 16,
        cursor: 'pointer',
        '&:hover': {
            color: props.playerColors.hover,
        },
    }); },
});
var AudioPlayCloseButton = function (_a) {
    var playerColors = _a.playerColors, onClose = _a.onClose, _b = _a.icons, icons = _b === void 0 ? {} : _b, _c = _a.classNames, classNames = _c === void 0 ? {} : _c;
    var _d = icons.CloseIcon, CloseIcon = _d === void 0 ? Close_1.default : _d;
    var classes = exports.useComponentStyles({ playerColors: playerColors });
    return (React.createElement(CloseIcon, { onClick: onClose, className: classnames_1.default(classes.icon, classNames.closeIcon) }));
};
exports.default = React.memo(AudioPlayCloseButton);
//# sourceMappingURL=AudioPlayerCloseButton.js.map