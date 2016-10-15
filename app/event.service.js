"use strict";
var mock_event_1 = require('./mock-event');
var EventService = (function () {
    function EventService() {
    }
    EventService.prototype.getEvents = function () {
        return Promise.resolve(mock_event_1.EVENTS);
    };
    EventService.prototype.getEventById = function (id) {
        for (var _i = 0, EVENTS_1 = mock_event_1.EVENTS; _i < EVENTS_1.length; _i++) {
            var event_1 = EVENTS_1[_i];
            if (event_1.id === id) {
                return event_1;
            }
        }
        return null;
    };
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map