# Analisi professionale del profilo GitHub — Unio-IO

Report preparato come consulenza (tutoring) per rendere il profilo GitHub `Unio-IO` una vetrina professionale dei tuoi progetti. Basato sui dati pubblici raccolti dal profilo e dai 4 repository esistenti al 2026-07-01.

> Nota metodologica: in questa sessione il mio accesso agli strumenti GitHub è limitato al repo `unio-io/seconda`, quindi i dati sugli altri repository sono stati raccolti leggendo le pagine pubbliche di GitHub, non tramite API autenticata. Se alcuni dettagli (stelle, follower, repo privati) sono cambiati nel frattempo, va ri-verificato direttamente sul sito.

---

## 1. Sintesi e valutazione attuale

Stato oggi:

| Aspetto | Stato attuale | Problema |
|---|---|---|
| Bio profilo | "UNIO Unio-IO" | Non dice cosa fai/costruisci |
| Campo località/sito | "yyu" | Testo placeholder, va tolto o compilato |
| README di profilo | Assente | Occasione persa: è la prima cosa che si vede |
| Repository pubblici | 4 (`bestHuman`, `design-extract`, `seconda`, `due`) | Uno vuoto, due quasi-duplicati |
| Descrizioni repo | Assenti o generiche ("doppio") | Non spiegano il progetto a un visitatore |
| Topics/tag | Non presenti | Riducono la scopribilità e la leggibilità |

**Il problema principale non è la qualità del codice (`design-extract` in particolare è un progetto serio e maturo), ma la presentazione**: un recruiter o collaboratore che visita il profilo oggi vede un account appena creato, con un repo vuoto in prima fila potenziale, due repository quasi identici che confondono, e nessun testo che spieghi chi sei e cosa fai.

---

## 2. Repository: cosa mettere in evidenza (pin) e perché

GitHub permette di fissare (pin) fino a **6 repository** in cima al profilo. Con solo 4 repository disponibili oggi, la priorità è pulire prima di scegliere.

### `bestHuman` — non pubblicare ancora
Repository vuoto (nessun commit, nessun contenuto). Un repo pubblico vuoto comunica trascuratezza. Azione: **rendilo privato finché non contiene almeno un README e un commit iniziale**, oppure eliminalo se è solo un esperimento abbandonato.

### `due` e `seconda` — quasi-duplicati, vanno consolidati
Entrambi sono template Next.js per clonare siti web via agenti AI (stesso concetto, README simile). Avere due repository quasi identici in vetrina comunica disorganizzazione, non produttività.

Azione consigliata:
- Scegli **uno solo** come repository "ufficiale" del progetto (a giudicare dal contenuto più curato, `seconda` sembra la versione più aggiornata/lavorata — ha più commit e documentazione strutturata in `docs/research/`).
- Rinominalo con un nome descrittivo in inglese, es. `ai-website-cloner` o `website-reverse-engineer` (nomi come "due"/"seconda" non dicono nulla a chi non parla italiano e non conosce il contesto).
- L'altro repo (`due`): rendilo privato, oppure se contiene storia utile, archivialo (Settings → Archive repository) con una nota nel README tipo "Superseded by `<link al repo principale>`".

### `design-extract` — il tuo progetto più forte, ma è un fork
È il repository più maturo (205 commit, licenza MIT, CODE_OF_CONDUCT, CONTRIBUTING, SECURITY, integrazioni VS Code/Figma/Raycast/MCP). Ottimo candidato per il pin **ma**:
- È un fork di `Manavarya09/design-extract`. Su GitHub i fork sono etichettati come tali e, se non ci sono commit propri visibili, sembrano "non tuoi".
- Con 205 commit propri hai un argomento forte: **rendilo esplicito**. Nella descrizione e nel README, aggiungi una riga tipo: *"Fork attivamente mantenuto di X, con Y commit di contributi propri: [elenco delle differenze/feature aggiunte]"*.
- Se i cambiamenti sono sostanziali e vuoi che appaia come progetto "tuo" a tutti gli effetti (non fork), valuta di fare un **detach del fork** (contattando il supporto GitHub) o di ripubblicarlo come repository indipendente mantenendo i crediti all'originale nel README.

### Repository privati non ancora mostrati
Se hai altri lavori (anche non perfetti) in repository privati, valuta di renderne pubblico almeno uno per portare il totale di progetti presentabili sopra i 2-3 attuali. Un profilo con un solo progetto solido sembra meno attivo di uno con 3-4 progetti curati.

**Pin consigliati (in ordine), una volta fatta la pulizia:**
1. Il template consolidato (ex `seconda`/`due`, rinominato)
2. `design-extract` (con la nota sul fork chiarita)
3. Eventuali altri repository validi che deciderai di rendere pubblici

---

## 3. Impostazioni profilo — checklist pratica ("i tasti da premere")

### Sulla pagina profilo (`github.com/Unio-IO` → "Edit profile")
- [ ] **Bio**: sostituisci "UNIO Unio-IO" con una frase chiara, es. *"Costruisco strumenti AI per il reverse-engineering di siti web e design systems"* (adatta al tuo focus reale).
- [ ] **Campo Location/Website ("yyu")**: rimuovi il placeholder. Metti il link al tuo sito/portfolio se esiste, o al tuo LinkedIn; lascia vuoto se non hai nulla da mostrare (meglio vuoto che un placeholder senza senso).
- [ ] **Avatar**: sostituisci l'avatar generato automaticamente con un logo (se è un brand/org) o una foto professionale (se è un profilo personale).
- [ ] **Pin dei repository**: dalla pagina profilo, click su "Customize your pins" e seleziona i repository indicati al punto 2.

### Su ogni repository (Settings del singolo repo, o dalla pagina principale con la rotellina "⚙️" accanto a "About")
- [ ] **Descrizione one-line** nel campo "About" (es. per il template: *"Template Next.js per clonare/ricostruire siti web con agenti AI, pixel-perfect"*; per design-extract: chiarire il rapporto col fork come sopra).
- [ ] **Topics/tag** pertinenti (es. `nextjs`, `ai-agents`, `web-scraping`, `design-tokens`, `typescript`) — migliorano la scopribilità e danno un colpo d'occhio immediato sullo stack.
- [ ] **Website link** nel campo About, se il progetto ha una demo online.
- [ ] **Social preview image**: in Settings → General → Social preview, carica uno screenshot o una card grafica — è l'immagine che appare quando condividi il link su LinkedIn/Twitter/Slack.
- [ ] **README per ogni repo pubblico**: assicurati che spieghi in 30 secondi cosa fa il progetto, come si installa/usa, e includa uno screenshot o GIF se è visuale (i tuoi template di clonazione siti si prestano benissimo a uno screenshot "prima/dopo").

### Impostazioni generali account
- [ ] Verifica se `Unio-IO` è un **account personale** o un'**organizzazione** (si vede in alto a sinistra sul profilo: le org hanno un badge "Organization" e la sezione "People"). Questo determina dove creare il README di profilo (vedi sezione 4).
- [ ] Se è un account personale ma lo usi per lavori professionali, valuta se il nome utente comunica bene chi sei (uno username criptico è meno memorabile di uno riconoscibile).

---

## 4. README di profilo — bozza sintetica

Il README di profilo appare in cima a `github.com/Unio-IO` ed è il primo elemento che un visitatore legge. Si crea:
- **Account personale**: repository pubblico chiamato esattamente `Unio-IO/Unio-IO`, con un file `README.md` nella root.
- **Organizzazione**: repository `Unio-IO/.github`, con il file in `profile/README.md`.

Struttura consigliata (breve, scannabile, niente muri di testo):

```markdown
### Ciao, sono [Nome] 👋

Costruisco strumenti AI per il reverse-engineering di siti web e l'estrazione
di design system — dal prototipo pixel-perfect al codice pronto per la produzione.

**In evidenza:**
- 🔧 [nome-template-consolidato](link) — template Next.js per clonare siti con agenti AI
- 🎨 [design-extract](link) — estrazione di design token da siti live (Figma, Tailwind, multi-piattaforma)

**Stack:** TypeScript · Next.js · Tailwind · Playwright/Chrome DevTools · MCP

📫 Contatti: [LinkedIn/email/sito]
```

Tienilo corto: 10-15 righe, 2-3 progetti in evidenza con link diretto, niente badge/contatori superflui che non aggiungono informazione reale.

---

## 5. Checklist finale, in ordine di priorità

1. **Rendi privato o completa `bestHuman`** (5 minuti, impatto immediato: elimina il segnale negativo più visibile).
2. **Consolida `due` + `seconda`** in un unico repository con nome descrittivo; archivia o rendi privato il duplicato.
3. **Aggiorna bio e campo location/website** del profilo, rimuovendo i placeholder.
4. **Aggiungi descrizione + topics** a tutti i repository pubblici che restano.
5. **Chiarisci lo status di fork di `design-extract`** nella descrizione/README, valorizzando i 205 commit propri.
6. **Crea il README di profilo** (`Unio-IO/Unio-IO` o `Unio-IO/.github`) con la struttura sopra.
7. **Pinna i repository** scelti (max 6, oggi ne bastano 2-3 curati).
8. (Opzionale, impatto maggiore nel tempo) Valuta di rendere pubblici altri progetti privati di qualità per aumentare il numero di progetti presentabili.

Fatti i punti 1-7, il profilo passa da "account appena creato con contenuti confusi" a "vetrina chiara di 2-3 progetti solidi con una identità riconoscibile" — che è l'obiettivo di un profilo professionale.
