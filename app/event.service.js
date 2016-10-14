"use strict";
var mock_event_1 = require('./mock-event');
var EventService = (function () {
    function EventService() {
    }
    EventService.prototype.getEvents = function () {
        return Promise.resolve(mock_event_1.EVENTS);
    };
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map