import { appConfig } from "./config";

const nearbyCharacters = [
  { id: "g1", name: "경비병", kind: "NPC", hpPct: 100, badge: "무고" },
  { id: "mob_orc_001", name: "오크", kind: "MONSTER", hpPct: 92 },
  { id: "p2", name: "비둘기밥", kind: "PLAYER", hpPct: 88 },
];

const nearbyObjects = [
  { id: "o_chest_001", name: "상자", kind: "CONTAINER" },
  { id: "o_tree_001", name: "나무", kind: "RESOURCE" },
  { id: "o_door_001", name: "나무문", kind: "DOOR" },
];

const logTabs = [
  {
    id: "chat",
    title: "채팅",
    lines: ["[홍길동] 안녕하세요!", "[비둘기밥] 잉곳 팝니다!"],
  },
  {
    id: "combat",
    title: "전투 로그",
    lines: ["당신은 오크를 공격했다.", "명중! (12 피해)"],
  },
  {
    id: "system",
    title: "시스템 로그",
    lines: ["호스트가 변경되었습니다: 홍길동"],
  },
];

const skills = [{ key: "SWORD", name: "검술", value: 35.2 }];

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header__location">
          <span className="label">현재 위치</span>
          <strong>브리튼 서쪽 은행</strong>
          <span className="muted">(britannia 10, 22)</span>
        </div>
        <div className="header__status">
          <div className="status-card">
            <span className="label">체력</span>
            <strong>100</strong>
          </div>
          <div className="status-card">
            <span className="label">기력</span>
            <strong>100</strong>
          </div>
          <div className="status-card">
            <span className="label">마나</span>
            <strong>30</strong>
          </div>
          <div className="status-card">
            <span className="label">명성/카르마</span>
            <strong>3450 / 1200</strong>
          </div>
        </div>
      </header>

      <section className="content">
        <aside className="panel">
          <div className="panel__header">
            <h2>주변 인물</h2>
            <span className="badge">3</span>
          </div>
          <ul className="list">
            {nearbyCharacters.map((character) => (
              <li key={character.id} className="list-item">
                <div>
                  <strong>{character.name}</strong>
                  <span className="muted">({character.kind})</span>
                </div>
                <div className="list-meta">
                  <span>HP {character.hpPct}%</span>
                  {character.badge ? (
                    <span className="tag">{character.badge}</span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <main className="panel">
          <div className="panel__header">
            <h2>주변 물체</h2>
            <span className="badge">3</span>
          </div>
          <ul className="list">
            {nearbyObjects.map((object) => (
              <li key={object.id} className="list-item">
                <div>
                  <strong>{object.name}</strong>
                  <span className="muted">({object.kind})</span>
                </div>
                <button className="button button--ghost" type="button">
                  사용
                </button>
              </li>
            ))}
          </ul>
          <div className="panel__section">
            <h3>현재 스킬</h3>
            <ul className="list">
              {skills.map((skill) => (
                <li key={skill.key} className="list-item">
                  <div>
                    <strong>{skill.name}</strong>
                    <span className="muted">({skill.key})</span>
                  </div>
                  <span>{skill.value.toFixed(1)}</span>
                </li>
              ))}
            </ul>
          </div>
        </main>

        <aside className="panel">
          <div className="panel__header">
            <h2>행동</h2>
          </div>
          <div className="actions">
            <button className="button" type="button">
              북쪽 이동
            </button>
            <button className="button" type="button">
              남쪽 이동
            </button>
            <button className="button" type="button">
              동쪽 이동
            </button>
            <button className="button" type="button">
              서쪽 이동
            </button>
            <button className="button button--accent" type="button">
              공격 시작
            </button>
            <button className="button button--ghost" type="button">
              공격 중지
            </button>
            <button className="button button--ghost" type="button">
              말하기
            </button>
          </div>

          <div className="panel__section">
            <h3>대상</h3>
            <div className="target-card">
              <strong>오크</strong>
              <span className="muted">HP 92%</span>
              <button className="button button--accent" type="button">
                대상 공격
              </button>
            </div>
          </div>

          <div className="panel__section">
            <h3>간단 인벤토리</h3>
            <ul className="list">
              <li className="list-item">
                <span>검</span>
                <span className="muted">장착</span>
              </li>
              <li className="list-item">
                <span>붕대</span>
                <span className="muted">x3</span>
              </li>
              <li className="list-item">
                <span>금화</span>
                <span className="muted">x128</span>
              </li>
            </ul>
          </div>

          <div className="panel__section panel__section--note">
            <h3>연결 정보</h3>
            <p className="muted">
              릴레이: {appConfig.relayUrl} / 룸 코드 길이:{" "}
              {appConfig.roomIdLength}
            </p>
            <p className="muted">
              현재 네트워크에서 P2P 연결이 어려울 수 있습니다.
            </p>
          </div>
        </aside>
      </section>

      <section className="logs">
        {logTabs.map((tab) => (
          <div key={tab.id} className="log-panel">
            <div className="panel__header">
              <h2>{tab.title}</h2>
            </div>
            <ul className="log-list">
              {tab.lines.map((line, index) => (
                <li key={`${tab.id}-${index}`}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
