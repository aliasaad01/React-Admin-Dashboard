import { Header } from "../components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useState, useRef } from "react";
import listPlugin from "@fullcalendar/list";

const EVENTS_KEY = "dashboard_events";

const Calendar = ({ data }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    location: "",
    color: "#6366f1",
  });
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem(EVENTS_KEY);
    return saved ? JSON.parse(saved) : data;
  });

  const calendarRef = useRef(null);

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
  };

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setShowAddModal(true);
  };

  const handleEventDrop = (info) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === info.event.id
          ? {
              ...event,
              start: info.event.start,
              end: info.event.end,
            }
          : event
      )
    );
  };

  const handleEventResize = (info) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === info.event.id
          ? {
              ...event,
              start: info.event.start,
              end: info.event.end,
            }
          : event
      )
    );
  };

  const handleAddEvent = () => {
    if (!newEvent.title) return;

    const eventToAdd = {
      id: Date.now().toString(),
      title: newEvent.title,
      start: selectedDate,
      end: selectedDate,
      backgroundColor: newEvent.color,
      borderColor: newEvent.color,
      extendedProps: {
        location: newEvent.location,
      },
    };

    setEvents((prev) => [...prev, eventToAdd]);

    // reset
    setNewEvent({ title: "", location: "", color: "#6366f1" });
    setShowAddModal(false);
  };

  useEffect(() => {
    localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  }, [events]);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category={"App"} title={"Calendar"} />

      {showAddModal && selectedEvent && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[420px]">
            <h2 className="text-lg font-semibold mb-4">Add New Event</h2>

            {/* Title */}
            <input
              type="text"
              placeholder="Event title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="w-full border rounded px-3 py-2 mb-3"
            />

            {/* Location */}
            <input
              type="text"
              placeholder="Location"
              value={newEvent.location}
              onChange={(e) =>
                setNewEvent({ ...newEvent, location: e.target.value })
              }
              className="w-full border rounded px-3 py-2 mb-3"
            />

            {/* Color */}
            <input
              type="color"
              value={newEvent.color}
              onChange={(e) =>
                setNewEvent({ ...newEvent, color: e.target.value })
              }
              className="w-12 h-10 mb-4"
            />

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-1.5 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleAddEvent}
                className="px-4 py-1.5 bg-indigo-600 text-white rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white p-4 rounded-xl shadow">
        <div className="flex gap-2 mb-4">
          {[
            { label: "Month", view: "dayGridMonth" },
            { label: "Week", view: "timeGridWeek" },
            { label: "Day", view: "timeGridDay" },
            { label: "Agenda", view: "listWeek" },
          ].map((btn) => (
            <button
              key={btn.view}
              onClick={() => calendarRef.current.getApi().changeView(btn.view)}
              className="px-3 py-1.5 text-sm border rounded hover:bg-gray-100"
            >
              {btn.label}
            </button>
          ))}
        </div>

        <FullCalendar
          ref={calendarRef}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick}
          dateClick={handleDateClick}
          eventDisplay="block"
          dayMaxEvents={3}
          editable
          selectable
          eventDrop={handleEventDrop}
          eventResize={handleEventResize}
          height="auto"
        />
      </div>
    </div>
  );
};

export default Calendar;
