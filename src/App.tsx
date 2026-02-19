import './App.css'

type DashboardMetric = {
  label: string
  value: string
  trend: string
}

type QuickAction = {
  title: string
  description: string
}

const metrics: DashboardMetric[] = [
  { label: 'Completed Fasts', value: '18/30', trend: '+2 this week' },
  { label: 'Qaza Remaining', value: '4', trend: '1 cleared yesterday' },
  { label: 'Prayer Consistency', value: '86%', trend: '+5% vs last week' },
  { label: 'Charity This Ramadan', value: '$240', trend: '3 donations logged' },
]

const quickActions: QuickAction[] = [
  { title: 'Log Today\'s Fast', description: 'Completed • Missed • Qaza' },
  { title: 'Update Namaz', description: 'Mark Fajr to Isha + Taraweeh' },
  { title: 'Add Sadaqah', description: 'Track zakat, sadaqah, fitrana' },
  { title: 'Write Daily Reflection', description: 'Capture gratitude and goals' },
]

const prayerTimes = [
  { name: 'Fajr', time: '04:48 AM' },
  { name: 'Dhuhr', time: '12:23 PM' },
  { name: 'Asr', time: '03:54 PM' },
  { name: 'Maghrib / Iftar', time: '06:41 PM' },
  { name: 'Isha', time: '08:01 PM' },
]

const zikrProgress = [
  { title: 'Astaghfar', current: 430, target: 1000 },
  { title: 'SubhanAllah', current: 210, target: 500 },
  { title: 'Salawat', current: 140, target: 300 },
]

const modules = [
  'Supabase Auth + Profile Setup',
  'Fasting Tracker (completed / missed / qaza)',
  'Namaz + Taraweeh Daily Check-in',
  'Sehri & Iftar Timings',
  'Quran Reading Progress',
  'Zikr Counter & Streaks',
  'Charity & Zakat Tracking',
  'Daily Notes + Ramadan Goals',
  'Notification Preferences',
]

function ProgressBar({ current, target }: { current: number; target: number }) {
  const percent = Math.min(100, Math.round((current / target) * 100))

  return (
    <div className="progress-wrap" aria-label={`Progress ${percent}%`}>
      <div className="progress-fill" style={{ width: `${percent}%` }} />
    </div>
  )
}

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Ramadan Companion</p>
        <h1>Modern Ramadan Tracker UI (Supabase Ready)</h1>
        <p>
          A complete interface for fasts, namaz, qaza, duas, zikr, sadaqah, goals, and
          reflections. Backend wiring can be connected to your Supabase schema next.
        </p>
      </header>

      <section className="grid metrics">
        {metrics.map((metric) => (
          <article key={metric.label} className="card metric-card">
            <p>{metric.label}</p>
            <h2>{metric.value}</h2>
            <span>{metric.trend}</span>
          </article>
        ))}
      </section>

      <section className="grid two-col">
        <article className="card">
          <div className="section-heading">
            <h3>Quick Actions</h3>
            <button type="button">+ New Entry</button>
          </div>
          <div className="list">
            {quickActions.map((item) => (
              <div key={item.title} className="list-item">
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card">
          <div className="section-heading">
            <h3>Today&apos;s Prayer Times</h3>
            <span>Lahore • Hanafi</span>
          </div>
          <ul className="timeline">
            {prayerTimes.map((prayer) => (
              <li key={prayer.name}>
                <span>{prayer.name}</span>
                <strong>{prayer.time}</strong>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="grid two-col">
        <article className="card">
          <div className="section-heading">
            <h3>Zikr Goals</h3>
            <span>Daily counters</span>
          </div>
          <div className="list">
            {zikrProgress.map((zikr) => (
              <div key={zikr.title} className="list-item">
                <div className="row-between">
                  <strong>{zikr.title}</strong>
                  <span>
                    {zikr.current}/{zikr.target}
                  </span>
                </div>
                <ProgressBar current={zikr.current} target={zikr.target} />
              </div>
            ))}
          </div>
        </article>

        <article className="card">
          <div className="section-heading">
            <h3>Backend Modules Planned</h3>
            <span>Mapped to your Supabase tables</span>
          </div>
          <ul className="checklist">
            {modules.map((module) => (
              <li key={module}>{module}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card">
        <div className="section-heading">
          <h3>Data Model Preview (UI placeholders)</h3>
          <span>Profiles • Fasts • Prayers • Charity • Goals • Notes</span>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Main Fields</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Roza Tracker</td>
                <td>fast_date, status, mood, notes</td>
                <td>UI Done</td>
              </tr>
              <tr>
                <td>Prayer Tracker</td>
                <td>fajr, dhuhr, asr, maghrib, isha, taraweeh</td>
                <td>UI Done</td>
              </tr>
              <tr>
                <td>Charity</td>
                <td>amount, charity_type, charity_date, notes</td>
                <td>UI Done</td>
              </tr>
              <tr>
                <td>Daily Notes</td>
                <td>note, note_date</td>
                <td>UI Done</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default App
