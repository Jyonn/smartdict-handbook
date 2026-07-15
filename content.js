(() => {
  const l = (zhCN, zhTW, en, fr, ja, ko, es) => ({
    "zh-CN": zhCN,
    "zh-TW": zhTW,
    en,
    fr,
    ja,
    ko,
    es,
  });

  const handbook = {
    locales: [
      { code: "zh-CN", label: "简中" },
      { code: "zh-TW", label: "繁中" },
      { code: "en", label: "English" },
      { code: "fr", label: "Français" },
      { code: "ja", label: "日本語" },
      { code: "ko", label: "한국어" },
      { code: "es", label: "Español" },
    ],
    ui: {
      nav: {
        home: l("总览", "總覽", "Overview", "Aperçu", "概要", "개요", "Resumen"),
        references: l("引用", "引用", "References", "Références", "参照", "참조", "Referencias"),
        defaults: l("默认值", "預設值", "Defaults", "Valeurs par défaut", "デフォルト", "기본값", "Valores por defecto"),
        pipelines: l("管道", "管線", "Pipelines", "Pipelines", "パイプライン", "파이프라인", "Pipelines"),
        modes: l("模式与错误", "模式與錯誤", "Modes & Errors", "Modes et erreurs", "モードとエラー", "모드와 오류", "Modos y errores"),
        recipes: l("场景", "場景", "Recipes", "Recettes", "レシピ", "레시피", "Recetas"),
        playground: l("Playground", "Playground", "Playground", "Playground", "Playground", "Playground", "Playground"),
      },
      menu: l("菜单", "選單", "Menu", "Menu", "メニュー", "메뉴", "Menú"),
      language: l("语言", "語言", "Language", "Langue", "言語", "언어", "Idioma"),
      interactiveHint: l(
        "所有案例都可编辑并运行，左侧代码高亮会实时更新。",
        "所有案例都可編輯並執行，左側程式碼高亮會即時更新。",
        "Every example is editable and runnable, and the left editor highlights as you type.",
        "Chaque exemple est éditable et exécutable, avec une coloration en direct à gauche.",
        "すべての例は編集・実行でき、左側のコードは入力に合わせてハイライトされます。",
        "모든 예제는 편집과 실행이 가능하며 왼쪽 코드는 입력 즉시 하이라이트됩니다.",
        "Todos los ejemplos se pueden editar y ejecutar, y el editor izquierdo resalta en tiempo real."
      ),
      examplesRunWith: l(
        "案例在浏览器中通过 smartdict-js 运行，数据结构语义与 Python 版本保持一致。",
        "案例在瀏覽器中透過 smartdict-js 執行，資料結構語義與 Python 版本保持一致。",
        "Examples run in the browser with smartdict-js while preserving the same data-structure semantics as the Python package.",
        "Les exemples s'exécutent dans le navigateur avec smartdict-js tout en conservant la même sémantique que la version Python.",
        "例はブラウザ上で smartdict-js を使って実行され、Python 版と同じデータ構造の意味を保ちます。",
        "예제는 브라우저에서 smartdict-js로 실행되며 Python 버전과 같은 데이터 구조 의미를 유지합니다.",
        "Los ejemplos se ejecutan en el navegador con smartdict-js y conservan la misma semántica de estructuras de datos que la versión de Python."
      ),
      reset: l("重置", "重設", "Reset", "Réinitialiser", "リセット", "재설정", "Restablecer"),
      copy: l("复制", "複製", "Copy", "Copier", "コピー", "복사", "Copiar"),
      input: l("输入", "輸入", "Input", "Entrée", "入力", "입력", "Entrada"),
      codeLanguage: l("代码语言", "程式語言", "Code language", "Langage du code", "コード言語", "코드 언어", "Idioma del código"),
      result: l("结果", "結果", "Result", "Résultat", "結果", "결과", "Resultado"),
      parseMode: l("解析模式", "解析模式", "Parse mode", "Mode de lecture", "解析モード", "파싱 모드", "Modo de análisis"),
      iterations: l("迭代次数", "迭代次數", "Iterations", "Itérations", "反復回数", "반복 횟수", "Iteraciones"),
      strict: l("严格", "嚴格", "strict", "strict", "strict", "strict", "strict"),
      partial: l("部分", "部分", "partial", "partiel", "partial", "partial", "partial"),
      iterative: l("迭代", "迭代", "iterative", "itératif", "iterative", "iterative", "iterative"),
      ready: l("已同步代码，编辑框失焦后会自动刷新右侧结果。", "已同步程式碼，編輯框失焦後會自動刷新右側結果。", "Code is synced. The result updates automatically when the editor loses focus.", "Le code est synchronisé. Le résultat se met à jour automatiquement lorsque l'éditeur perd le focus.", "コードは同期済みです。エディタからフォーカスが外れると右側結果が自動更新されます。", "코드가 동기화되었습니다. 편집기에서 포커스가 빠지면 오른쪽 결과가 자동 갱신됩니다.", "El código está sincronizado. El resultado se actualiza automáticamente cuando el editor pierde el foco."),
      compiled: l("已运行", "已執行", "Compiled", "Compilé", "実行済み", "실행됨", "Compilado"),
      copied: l("已复制", "已複製", "Copied", "Copié", "コピー済み", "복사됨", "Copiado"),
      copyFailed: l("复制失败", "複製失敗", "Copy failed", "Copie impossible", "コピー失敗", "복사 실패", "La copia falló"),
      compileError: l("运行失败", "執行失敗", "Run failed", "Échec de l'exécution", "実行失敗", "실행 실패", "La ejecución falló"),
      install: l("安装", "安裝", "Install", "Installation", "インストール", "설치", "Instalación"),
      note: l("说明", "說明", "Note", "Note", "補足", "참고", "Nota"),
      footerDocs: l("查看完整源码与发布仓库。", "查看完整原始碼與發佈倉庫。", "Browse the source repositories and published docs.", "Parcourez les dépôts source et la documentation publiée.", "ソースリポジトリと公開ドキュメントを見る。", "소스 저장소와 배포 문서를 확인하세요.", "Consulta los repositorios fuente y la documentación publicada."),
      sourceLinks: l("源码链接", "原始碼連結", "Source links", "Liens source", "ソースリンク", "소스 링크", "Enlaces al código"),
      autoRunHint: l("切换解析模式或迭代次数也会立即重新运行。", "切換解析模式或迭代次數也會立即重新執行。", "Changing the parse mode or iteration count reruns the example immediately.", "Changer le mode de lecture ou le nombre d'itérations relance l'exemple immédiatement.", "解析モードや反復回数を変えるとすぐ再実行されます。", "파싱 모드나 반복 횟수를 바꾸면 예제가 즉시 다시 실행됩니다.", "Cambiar el modo de análisis o el número de iteraciones vuelve a ejecutar el ejemplo al instante."),
    },
    pages: {
      home: {
        title: l("smartdict", "smartdict", "smartdict", "smartdict", "smartdict", "smartdict", "smartdict"),
        hero: {
          eyebrow: l("smartdict 0.5.1", "smartdict 0.5.1", "smartdict 0.5.1", "smartdict 0.5.1", "smartdict 0.5.1", "smartdict 0.5.1", "smartdict 0.5.1"),
          title: l("类型友好的配置引用。", "型別友好的設定引用。", "Typed config references.", "Références de configuration typées.", "型を保つ設定参照。", "타입을 보존하는 설정 참조.", "Referencias de configuración con tipos."),
          text: l(
            "smartdict 用来解析嵌套配置里的引用表达式，同时尽量保留原生类型。它支持 JSON 默认值、fallback chain、轻量 pipeline，以及严格/部分/迭代三种解析模式。",
            "smartdict 用來解析巢狀設定裡的引用表達式，同時盡量保留原生型別。它支援 JSON 預設值、fallback chain、輕量 pipeline，以及嚴格/部分/迭代三種解析模式。",
            "smartdict resolves references inside nested configs while preserving native values whenever possible. It supports JSON defaults, fallback chains, lightweight pipelines, and strict, partial, or iterative parse modes.",
            "smartdict résout les références dans des configurations imbriquées tout en conservant autant que possible les types natifs. Il prend en charge les valeurs par défaut JSON, les chaînes de secours, les pipelines légers et les modes strict, partiel ou itératif.",
            "smartdict はネストした設定内の参照を解決しつつ、可能な限りネイティブ型を保ちます。JSON デフォルト値、フォールバック連鎖、軽量パイプライン、strict / partial / iterative の各モードに対応しています。",
            "smartdict는 중첩된 설정 안의 참조를 해석하면서 가능한 한 원래 타입을 유지합니다. JSON 기본값, fallback chain, 가벼운 pipeline, strict / partial / iterative 모드를 지원합니다.",
            "smartdict resuelve referencias dentro de configuraciones anidadas conservando los valores nativos siempre que es posible. Soporta valores por defecto en JSON, cadenas de respaldo, pipelines ligeros y modos de análisis strict, partial e iterative."
          ),
          actions: [
            { href: "./references.html", label: l("先看语法", "先看語法", "Learn the syntax", "Voir la syntaxe", "構文を見る", "문법 보기", "Ver la sintaxis") },
            { href: "./playground.html", label: l("打开 Playground", "打開 Playground", "Open the playground", "Ouvrir le playground", "Playground を開く", "Playground 열기", "Abrir playground") },
          ],
          aside: [
            "input -> ${ref}",
            "default -> ${missing:[1,2,3]}",
            "pipeline -> ${env.PORT:8000|int}",
            "fallback -> ${primary:${secondary:null}}",
          ],
        },
        sections: [
          {
            type: "cards",
            kicker: l("从这里开始", "從這裡開始", "Start here", "Commencez ici", "ここから", "여기서 시작", "Empieza aquí"),
            title: l("你会在这里看到什么", "你會在這裡看到什麼", "What this handbook covers", "Ce que couvre ce manuel", "この handbook にあるもの", "이 handbook에서 다루는 내용", "Qué cubre este manual"),
            cards: [
              {
                title: l("引用解析", "引用解析", "Reference resolution", "Résolution des références", "参照解決", "참조 해석", "Resolución de referencias"),
                text: l("复用已有字段，支持嵌套路径、动态 key 和对象属性访问。", "重用既有欄位，支援巢狀路徑、動態 key 與物件屬性存取。", "Reuse existing fields with nested paths, dynamic keys, and object attribute access.", "Réutilisez des champs existants avec chemins imbriqués, clés dynamiques et accès aux attributs d'objet.", "ネストしたパス、動的キー、オブジェクト属性参照に対応します。", "중첩 경로, 동적 키, 객체 속성 접근으로 기존 필드를 재사용합니다.", "Reutiliza campos existentes con rutas anidadas, claves dinámicas y acceso a atributos de objetos."),
                href: "./references.html",
              },
              {
                title: l("默认值与 JSON", "預設值與 JSON", "Defaults & JSON", "Valeurs par défaut et JSON", "デフォルトと JSON", "기본값과 JSON", "Valores por defecto y JSON"),
                text: l("数字、布尔、null、数组和对象都可以直接作为 typed fallback。", "數字、布林、null、陣列與物件都可以直接作為 typed fallback。", "Numbers, booleans, null, arrays, and objects can all act as typed fallbacks.", "Nombres, booléens, null, tableaux et objets peuvent servir de valeurs de secours typées.", "数値、真偽値、null、配列、オブジェクトを型付きフォールバックとして使えます。", "숫자, 불리언, null, 배열, 객체를 타입 보존 fallback으로 사용할 수 있습니다.", "Números, booleanos, null, arreglos y objetos pueden usarse como valores de respaldo tipados."),
                href: "./defaults-json.html",
              },
              {
                title: l("管道转换", "管線轉換", "Pipelines", "Pipelines", "パイプライン", "파이프라인", "Pipelines"),
                text: l("把解析后的值继续转成 int、bool、slug 或 JSON。", "把解析後的值繼續轉成 int、bool、slug 或 JSON。", "Transform resolved values into ints, bools, slugs, or parsed JSON.", "Transformez les valeurs résolues en int, bool, slug ou JSON.", "解決後の値を int / bool / slug / JSON に変換できます。", "해석된 값을 int, bool, slug, JSON으로 변환합니다.", "Transforma valores resueltos en int, bool, slug o JSON."),
                href: "./pipelines.html",
              },
              {
                title: l("模式与错误", "模式與錯誤", "Modes & errors", "Modes et erreurs", "モードとエラー", "모드와 오류", "Modos y errores"),
                text: l("严格、部分、迭代三种模式，以及缺失引用、环引用、stage error。", "嚴格、部分、迭代三種模式，以及缺失引用、環引用、stage error。", "Strict, partial, and iterative modes with structured errors for missing refs, cycles, and stage failures.", "Modes strict, partiel et itératif avec erreurs structurées pour références manquantes, cycles et échecs d'étape.", "strict / partial / iterative モードと、未解決参照・循環・変換失敗の扱い。", "strict / partial / iterative 모드와 미해결 참조, 순환, stage 실패를 다룹니다.", "Modos strict, partial e iterative con errores estructurados para referencias faltantes, ciclos y fallos de etapa."),
                href: "./modes-errors.html",
              },
              {
                title: l("交互案例", "互動案例", "Interactive cases", "Cas interactifs", "インタラクティブ例", "인터랙티브 예제", "Casos interactivos"),
                text: l("每个核心案例都能直接编辑和运行，不需要在底部靠注释读结果。", "每個核心案例都能直接編輯與執行，不需要在底部靠註解讀結果。", "Every core example is editable and runnable, so you no longer need result comments at the bottom.", "Chaque exemple central est éditable et exécutable, sans commentaire de résultat en bas.", "主要な例はすべて編集・実行でき、下部のコメント結果は不要です。", "모든 핵심 예제는 편집과 실행이 가능하며 아래 주석 결과가 필요 없습니다.", "Cada ejemplo central se puede editar y ejecutar, sin depender de comentarios con el resultado al final."),
                href: "./playground.html",
              },
            ],
          },
          {
            type: "install",
            kicker: l("安装", "安裝", "Install", "Installation", "インストール", "설치", "Instalación"),
            title: l("同时安装 python 与 js 版本", "同時安裝 python 與 js 版本", "Install both the python and js versions", "Installer les versions python et js", "python 版と js 版を両方インストール", "python 버전과 js 버전을 함께 설치", "Instalar tanto la versión de python como la de js"),
            body: l(
              "如果你只在 Python 里用 smartdict，装 PyPI 包就够了；如果你还要在浏览器或 Node 里跑同样的案例，再装 smartdict-js。",
              "如果你只在 Python 裡用 smartdict，裝 PyPI 套件就夠了；如果你還要在瀏覽器或 Node 裡跑同樣的案例，再裝 smartdict-js。",
              "If you only use smartdict in Python, the PyPI package is enough. If you also want the same behavior in the browser or Node, install smartdict-js as well.",
              "Si vous n'utilisez smartdict qu'en Python, le paquet PyPI suffit. Si vous voulez aussi le même comportement dans le navigateur ou Node, installez également smartdict-js.",
              "Python だけで使うなら PyPI パッケージで十分です。ブラウザや Node でも同じ挙動を使いたいなら smartdict-js も入れてください。",
              "Python에서만 쓴다면 PyPI 패키지만으로 충분합니다. 브라우저나 Node에서도 같은 동작을 쓰려면 smartdict-js도 설치하세요.",
              "Si solo usas smartdict en Python, el paquete de PyPI es suficiente. Si también quieres el mismo comportamiento en el navegador o en Node, instala smartdict-js."
            ),
            blocks: [
              { codeLabel: "python / pip", code: "pip install smartdict" },
              { codeLabel: "js / npm", code: "npm install smartdict-js" },
            ],
            note: l(
              "本手册基于当前 smartdict-python 与 smartdict-js 源码，两者都对齐 smartdict 0.5.1 这组能力。",
              "本手冊基於目前的 smartdict-python 與 smartdict-js 原始碼，兩者都對齊 smartdict 0.5.1 這組能力。",
              "This handbook tracks both the current smartdict-python and smartdict-js sources, aligned around the smartdict 0.5.1 feature set.",
              "Ce manuel suit à la fois les sources actuelles de smartdict-python et smartdict-js, alignées sur l'ensemble de fonctionnalités smartdict 0.5.1.",
              "この handbook は smartdict-python と smartdict-js の現行ソースをもとにし、smartdict 0.5.1 の機能セットに揃えています。",
              "이 handbook는 smartdict-python과 smartdict-js의 현재 소스를 기준으로 하며, smartdict 0.5.1 기능 집합에 맞춰져 있습니다.",
              "Este manual sigue tanto el código actual de smartdict-python como el de smartdict-js, alineados con el conjunto de funciones de smartdict 0.5.1."
            ),
          },
          {
            type: "cases",
            kicker: l("快速开始", "快速開始", "Quick start", "Démarrage rapide", "クイックスタート", "빠른 시작", "Inicio rápido"),
            title: l("一个最小但完整的配置例子", "一個最小但完整的設定例子", "A minimal but complete config example", "Un exemple de configuration minimal mais complet", "最小ながら完結した設定例", "작지만 완전한 설정 예제", "Un ejemplo mínimo pero completo"),
            body: l(
              "下面这个案例展示了最常见的 smartdict 配置风格：路径复用、层级引用和最终产物名拼接。",
              "下面這個案例展示了最常見的 smartdict 設定風格：路徑重用、層級引用與最終產物名稱拼接。",
              "This example shows the most common smartdict style: reusable paths, hierarchical references, and derived artifact names.",
              "Cet exemple montre le style smartdict le plus courant : chemins réutilisables, références hiérarchiques et noms d'artefacts dérivés.",
              "この例は、smartdict の典型的な使い方であるパス再利用、階層参照、生成名の組み立てを示します。",
              "이 예제는 경로 재사용, 계층 참조, 결과 이름 조합이라는 smartdict의 대표적인 사용 방식을 보여줍니다.",
              "Este ejemplo muestra el estilo más común de smartdict: rutas reutilizables, referencias jerárquicas y nombres derivados."
            ),
            cases: [
              {
                title: l("快速开始", "快速開始", "Quick start", "Démarrage rapide", "クイックスタート", "빠른 시작", "Inicio rápido"),
                summary: l("编辑左侧配置，离开输入框后查看最终的展开结果。", "編輯左側設定，離開輸入框後查看最終展開結果。", "Edit the config on the left, then blur the editor to inspect the expanded result.", "Modifiez la configuration à gauche puis quittez l'éditeur pour voir le résultat développé.", "左側の設定を編集し、フォーカスを外して展開結果を確認します。", "왼쪽 설정을 수정한 뒤 포커스를 벗어나 최종 확장 결과를 확인하세요.", "Edita la configuración a la izquierda y luego quita el foco para ver el resultado expandido."),
                mode: "strict",
                source: `{
  dataset: "spotify",
  load: {
    base_path: "~/data/\${dataset}",
    dev_path: "\${load.base_path}/dev",
    test_path: "\${load.base_path}/test"
  },
  network: {
    num_hidden_layers: 3,
    num_attention_heads: 8
  },
  store: "checkpoints/\${dataset}/\${network.num_hidden_layers}L\${network.num_attention_heads}H/"
}`,
              },
            ],
          },
          {
            type: "cards",
            kicker: l("常见场景", "常見場景", "Common scenarios", "Scénarios courants", "よくある場面", "자주 쓰는 장면", "Escenarios comunes"),
            title: l("大家通常怎么用 smartdict", "大家通常怎麼用 smartdict", "How people usually use smartdict", "Comment on utilise généralement smartdict", "smartdict の典型的な使い方", "smartdict를 보통 어떻게 쓰는가", "Cómo suele usarse smartdict"),
            cards: [
              {
                title: l("实验配置", "實驗設定", "Experiment configs", "Configurations d'expériences", "実験設定", "실험 설정", "Configuraciones de experimentos"),
                text: l("数据集名、checkpoint 路径、模型别名都可以在配置层复用。", "資料集名稱、checkpoint 路徑、模型別名都可以在設定層重用。", "Reuse dataset names, checkpoint paths, and model aliases directly in config.", "Réutilisez noms de jeux de données, chemins de checkpoint et alias de modèles dans la config.", "データセット名や checkpoint パス、モデル別名を設定側で再利用できます。", "데이터셋 이름, 체크포인트 경로, 모델 별칭을 설정에서 직접 재사용합니다.", "Reutiliza nombres de datasets, rutas de checkpoint y alias de modelos directamente en la configuración."),
              },
              {
                title: l("服务参数", "服務參數", "Service settings", "Paramètres de service", "サービス設定", "서비스 설정", "Ajustes de servicio"),
                text: l("把端口、开关和 JSON 字段在解析时直接转成可用类型。", "把連接埠、開關與 JSON 欄位在解析時直接轉成可用型別。", "Parse ports, flags, and JSON payloads into usable types during resolution.", "Transformez ports, indicateurs et charges JSON en types utilisables pendant la résolution.", "ポートやフラグ、JSON 値を解決時に実用的な型へ変換します。", "포트, 플래그, JSON 페이로드를 해석 단계에서 바로 usable 타입으로 바꿉니다.", "Convierte puertos, banderas y cargas JSON en tipos útiles durante la resolución."),
              },
              {
                title: l("结构化默认值", "結構化預設值", "Structured defaults", "Valeurs par défaut structurées", "構造化デフォルト", "구조화 기본값", "Valores por defecto estructurados"),
                text: l("缺失值可以直接回落到数组或字典，而不是字符串。", "缺失值可以直接退回到陣列或字典，而不是字串。", "Missing values can fall back to arrays or objects rather than plain strings.", "Les valeurs manquantes peuvent retomber sur des tableaux ou objets plutôt que des chaînes.", "欠損値を文字列ではなく配列やオブジェクトへフォールバックできます。", "누락된 값은 문자열이 아니라 배열이나 객체로 fallback할 수 있습니다.", "Los valores faltantes pueden caer en arreglos u objetos en lugar de cadenas."),
              },
              {
                title: l("对象 + 字典混合", "物件 + 字典混合", "Hybrid object + dict configs", "Configs hybrides objet + dict", "オブジェクトと辞書の混在設定", "객체 + 딕셔너리 혼합 설정", "Configuraciones híbridas objeto + dict"),
                text: l("运行时状态放在对象里，环境详情留在普通配置字典里。", "執行時狀態放在物件裡，環境細節留在普通設定字典裡。", "Keep runtime state in objects while environment details stay in plain config dicts.", "Conservez l'état runtime dans des objets et les détails d'environnement dans des dictionnaires de config.", "実行時状態はオブジェクトに、環境詳細は通常の設定辞書に置けます。", "런타임 상태는 객체에 두고 환경 세부사항은 일반 설정 딕셔너리에 둘 수 있습니다.", "Mantén el estado en objetos y los detalles del entorno en diccionarios de configuración."),
              },
            ],
          },
        ],
        footer: l(
          "继续阅读语法页，或者直接进入 Playground 试手感。",
          "繼續閱讀語法頁，或直接進入 Playground 試手感。",
          "Continue with the syntax guide or jump straight into the playground.",
          "Poursuivez avec le guide de syntaxe ou passez directement au playground.",
          "構文ガイドに進むか、そのまま playground に入れます。",
          "문법 가이드로 계속 가거나 바로 playground로 들어갈 수 있습니다.",
          "Continúa con la guía de sintaxis o entra directamente al playground."
        ),
      },
      references: {
        title: l("smartdict · 引用", "smartdict · 引用", "smartdict · references", "smartdict · références", "smartdict · 参照", "smartdict · 참조", "smartdict · referencias"),
        hero: {
          eyebrow: l("特性页", "特性頁", "Feature page", "Page de fonctionnalité", "機能ページ", "기능 페이지", "Página de función"),
          title: l("引用", "引用", "References", "References", "参照", "참조", "Referencias"),
          text: l(
            "引用解析是 smartdict 的核心能力。本页围绕插值、保留原生类型、嵌套引用、动态 key，以及对象属性访问展开。",
            "引用解析是 smartdict 的核心能力。本頁圍繞插值、保留原生型別、巢狀引用、動態 key，以及物件屬性存取展開。",
            "Reference resolution is smartdict's core feature. This page covers interpolation, native-value preservation, nested references, dynamic keys, and object attribute access.",
            "La résolution de références est la capacité centrale de smartdict. Cette page couvre l'interpolation, la préservation des valeurs natives, les références imbriquées, les clés dynamiques et l'accès aux attributs d'objet.",
            "参照解決は smartdict の中核です。このページでは補間、ネイティブ型保持、ネスト参照、動的キー、オブジェクト属性アクセスを扱います。",
            "참조 해석은 smartdict의 핵심 기능입니다. 이 페이지에서는 문자열 보간, 원래 타입 유지, 중첩 참조, 동적 키, 객체 속성 접근을 다룹니다.",
            "La resolución de referencias es la capacidad central de smartdict. Esta página cubre interpolación, preservación de tipos nativos, referencias anidadas, claves dinámicas y acceso a atributos."
          ),
        },
        sections: [
          {
            type: "cases",
            kicker: l("案例", "案例", "Cases", "Cas", "ケース", "사례", "Casos"),
            title: l("从简单到复杂的引用行为", "從簡單到複雜的引用行為", "Reference behavior from simple to advanced", "Comportement des références du plus simple au plus avancé", "基本から高度までの参照挙動", "기본부터 고급까지의 참조 동작", "Comportamiento de referencias de lo simple a lo avanzado"),
            body: l(
              "这些例子都可以直接改。左侧编辑器采用 JS 对象语法，但对应的是 Python 里同样的配置结构。",
              "這些例子都可以直接改。左側編輯器採用 JS 物件語法，但對應的是 Python 裡同樣的設定結構。",
              "These examples are directly editable. The left editor uses JS object syntax, but it mirrors the same config structures you would use in Python.",
              "Ces exemples sont directement modifiables. L'éditeur de gauche utilise une syntaxe d'objet JS mais reflète les mêmes structures de configuration qu'en Python.",
              "これらの例はそのまま編集できます。左側は JS オブジェクト構文ですが、Python 側と同じ設定構造を表しています。",
              "이 예제들은 바로 수정할 수 있습니다. 왼쪽 편집기는 JS 객체 문법을 쓰지만 Python에서의 동일한 설정 구조를 반영합니다.",
              "Estos ejemplos se pueden editar directamente. El editor izquierdo usa sintaxis de objetos JS, pero refleja la misma estructura que usarías en Python."
            ),
            cases: [
              {
                title: l("字符串插值", "字串插值", "String interpolation", "Interpolation de chaînes", "文字列補間", "문자열 보간", "Interpolación de cadenas"),
                summary: l("引用出现在更大的字符串里时，最终结果会是字符串。", "引用出現在更大的字串裡時，最終結果會是字串。", "When a reference appears inside a larger string, the final result is a string.", "Quand une référence apparaît dans une chaîne plus grande, le résultat final reste une chaîne.", "参照が大きな文字列内にある場合、結果は文字列になります。", "참조가 더 큰 문자열 안에 들어가면 최종 결과는 문자열입니다.", "Cuando una referencia aparece dentro de una cadena mayor, el resultado final sigue siendo una cadena."),
                mode: "strict",
                source: `{
  name: "smartdict",
  message: "hello-\${name}"
}`,
              },
              {
                title: l("单引用保留原生类型", "單引用保留原生型別", "Single references preserve native values", "Une référence seule préserve la valeur native", "単独参照はネイティブ型を保つ", "단일 참조는 원래 타입을 유지", "Una referencia única conserva el valor nativo"),
                summary: l("默认写法和 `${...}$` 都可以直接拿到对象，而不是对象的字符串形式。", "預設寫法和 `${...}$` 都可以直接拿到物件，而不是物件的字串形式。", "Both the default syntax and `${...}$` return the object itself rather than its string form.", "La syntaxe par défaut et `${...}$` renvoient l'objet lui-même plutôt qu'une chaîne.", "通常構文でも `${...}$` でも、文字列化ではなくオブジェクト自体を取得できます。", "기본 구문과 `${...}$` 모두 문자열이 아닌 객체 자체를 돌려줍니다.", "Tanto la sintaxis por defecto como `${...}$` devuelven el objeto mismo y no su versión en cadena."),
                mode: "strict",
                source: `{
  config: { debug: true, retries: 3 },
  selected_default: "\${config}",
  selected_explicit: "\${config}$"
}`,
              },
              {
                title: l("嵌套引用", "巢狀引用", "Nested references", "Références imbriquées", "ネスト参照", "중첩 참조", "Referencias anidadas"),
                summary: l("先解析内部表达式，再用结果作为外层路径。", "先解析內部表達式，再用結果作為外層路徑。", "Resolve the inner expression first, then use its value as the outer path.", "On résout d'abord l'expression interne, puis on utilise sa valeur comme chemin externe.", "まず内側の式を解決し、その値を外側のパスとして使います。", "먼저 내부 표현식을 해석한 뒤 그 값을 바깥 경로로 사용합니다.", "Primero se resuelve la expresión interna y luego su valor se usa como ruta externa."),
                mode: "strict",
                source: `{
  env: "prod",
  keys: { prod: "url" },
  url: "https://example.com",
  result: "\${\${keys.\${env}}}"
}`,
              },
              {
                title: l("动态 key", "動態 key", "Dynamic keys", "Clés dynamiques", "動的キー", "동적 키", "Claves dinámicas"),
                summary: l("不仅值能引用，字典 key 也能先解析再落盘。", "不僅值能引用，字典 key 也能先解析再落盤。", "Not only values but also object keys can be resolved dynamically.", "Les valeurs mais aussi les clés d'objet peuvent être résolues dynamiquement.", "値だけでなくオブジェクトのキーも動的に解決できます。", "값뿐 아니라 객체 키도 동적으로 해석할 수 있습니다.", "No solo los valores, también las claves del objeto pueden resolverse dinámicamente."),
                mode: "strict",
                source: `{
  name: "k",
  "\${name}": 1
}`,
              },
              {
                title: l("数组索引路径", "陣列索引路徑", "Array index paths", "Chemins d'index de tableau", "配列インデックス参照", "배열 인덱스 경로", "Rutas con índices de arreglo"),
                summary: l("数字路径片段可以访问列表位置。", "數字路徑片段可以存取列表位置。", "Numeric path components can access positions inside arrays.", "Les composants numériques du chemin peuvent accéder aux positions d'un tableau.", "数値パス要素で配列位置にアクセスできます。", "숫자 경로 조각으로 배열 위치에 접근할 수 있습니다.", "Los componentes numéricos de la ruta pueden acceder a posiciones del arreglo."),
                mode: "strict",
                source: `{
  items: ["a", "b"],
  pair: ["x", "y"],
  pick_list: "\${items.1}",
  pick_pair: "\${pair.0}"
}`,
              },
              {
                title: l("对象属性与混合路径", "物件屬性與混合路徑", "Object attributes and mixed paths", "Attributs d'objet et chemins mixtes", "オブジェクト属性と混合パス", "객체 속성과 혼합 경로", "Atributos de objeto y rutas mixtas"),
                summary: l("可以从对象属性里取路径片段，再继续走普通配置字典。", "可以從物件屬性裡取路徑片段，再繼續走普通設定字典。", "You can read path fragments from object attributes and continue into plain config objects.", "Vous pouvez lire un fragment de chemin depuis un attribut d'objet puis continuer dans des objets de config classiques.", "オブジェクト属性からパス片を取り、そのまま通常の設定オブジェクトへ進めます。", "객체 속성에서 경로 조각을 읽어 일반 설정 객체로 계속 탐색할 수 있습니다.", "Puedes leer fragmentos de ruta desde atributos de objetos y continuar en objetos de configuración normales."),
                mode: "strict",
                source: `class A {
  constructor() {
    this.x = "value";
  }
}

class Config {
  constructor() {
    this.profile = "prod";
  }
}

return {
  a: new A(),
  app: new Config(),
  services: { prod: { url: "https://example.com" } },
  attr_value: "\${a.x}",
  mixed_value: "\${services.\${app.profile}.url}"
};`,
                pythonSource: `class A:
  def __init__(self):
    self.x = "value"


class Config:
  def __init__(self):
    self.profile = "prod"


{
  "a": A(),
  "app": Config(),
  "services": {"prod": {"url": "https://example.com"}},
  "attr_value": "\${a.x}",
  "mixed_value": "\${services.\${app.profile}.url}",
}`,
              },
            ],
          },
        ],
        footer: l("下一页看默认值与 JSON。", "下一頁看預設值與 JSON。", "Next up: defaults and JSON.", "Suite : valeurs par défaut et JSON.", "次はデフォルトと JSON。", "다음은 기본값과 JSON입니다.", "Siguiente: valores por defecto y JSON."),
      },
      defaults: {
        title: l("smartdict · 默认值", "smartdict · 預設值", "smartdict · defaults", "smartdict · defaults", "smartdict · デフォルト", "smartdict · 기본값", "smartdict · valores por defecto"),
        hero: {
          eyebrow: l("特性页", "特性頁", "Feature page", "Page de fonctionnalité", "機能ページ", "기능 페이지", "Página de función"),
          title: l("默认值与 JSON", "預設值與 JSON", "Defaults & JSON", "Defaults & JSON", "デフォルトと JSON", "기본값과 JSON", "Defaults y JSON"),
          text: l(
            "smartdict 会优先把默认值当成 typed data 处理。标量、数组、对象和嵌套 fallback 都可以保留结构，而不是退化成字符串。",
            "smartdict 會優先把預設值當成 typed data 處理。標量、陣列、物件與巢狀 fallback 都可以保留結構，而不是退化成字串。",
            "smartdict treats defaults as typed data whenever possible. Scalars, arrays, objects, and nested fallbacks can all keep their native structure instead of collapsing to strings.",
            "smartdict traite les valeurs par défaut comme des données typées dès que possible. Les scalaires, tableaux, objets et replis imbriqués conservent leur structure native.",
            "smartdict はデフォルト値を可能な限り型付きデータとして扱います。スカラー、配列、オブジェクト、ネストしたフォールバックも構造を保てます。",
            "smartdict는 가능하면 기본값을 타입 있는 데이터로 취급합니다. 스칼라, 배열, 객체, 중첩 fallback 모두 구조를 유지할 수 있습니다.",
            "smartdict trata los valores por defecto como datos tipados siempre que puede. Escalares, arreglos, objetos y fallbacks anidados conservan su estructura nativa."
          ),
        },
        sections: [
          {
            type: "cases",
            kicker: l("案例", "案例", "Cases", "Cas", "ケース", "사례", "Casos"),
            title: l("看看默认值怎么被解释", "看看預設值怎麼被解釋", "How defaults get interpreted", "Comment les valeurs par défaut sont interprétées", "デフォルト値の解釈", "기본값이 해석되는 방식", "Cómo se interpretan los valores por defecto"),
            body: l(
              "这里的例子覆盖标量、JSON 数组、JSON 对象、带冒号的值，以及嵌套 fallback chain。",
              "這裡的例子涵蓋標量、JSON 陣列、JSON 物件、帶冒號的值，以及巢狀 fallback chain。",
              "These examples cover scalars, JSON arrays, JSON objects, values that contain colons, and nested fallback chains.",
              "Ces exemples couvrent les scalaires, tableaux JSON, objets JSON, valeurs contenant des deux-points et chaînes de secours imbriquées.",
              "これらの例では、スカラー、JSON 配列、JSON オブジェクト、コロンを含む値、ネストしたフォールバックを扱います。",
              "이 예제들은 스칼라, JSON 배열, JSON 객체, 콜론이 들어간 값, 중첩 fallback chain을 다룹니다.",
              "Estos ejemplos cubren escalares, arreglos JSON, objetos JSON, valores con dos puntos y cadenas de fallback anidadas."
            ),
            cases: [
              {
                title: l("标量默认值", "標量預設值", "Scalar defaults", "Valeurs par défaut scalaires", "スカラーデフォルト", "스칼라 기본값", "Valores por defecto escalares"),
                summary: l("数字、布尔、null 和普通字符串都能直接写在 `:` 后面。", "數字、布林、null 與普通字串都能直接寫在 `:` 後面。", "Numbers, booleans, null, and plain strings can all appear directly after `:`.", "Les nombres, booléens, null et chaînes simples peuvent suivre directement `:`.", "数値、真偽値、null、通常の文字列を `:` の後ろにそのまま書けます。", "숫자, 불리언, null, 일반 문자열을 `:` 뒤에 바로 쓸 수 있습니다.", "Números, booleanos, null y cadenas simples pueden ir directamente después de `:`."),
                mode: "strict",
                source: `{
  int_value: "\${missing:42}",
  bool_value: "\${missing:true}",
  null_value: "\${missing:null}",
  text_value: "\${missing:fallback}"
}`,
              },
              {
                title: l("JSON 数组与对象默认值", "JSON 陣列與物件預設值", "JSON array and object defaults", "Valeurs par défaut JSON tableau et objet", "JSON 配列とオブジェクトのデフォルト", "JSON 배열과 객체 기본값", "Valores por defecto JSON de arreglo y objeto"),
                summary: l("如果默认值本身是合法 JSON，就会保留成对应的数据结构。", "如果預設值本身是合法 JSON，就會保留成對應的資料結構。", "If the default is valid JSON, it stays as the matching data structure.", "Si la valeur par défaut est un JSON valide, elle reste dans la structure correspondante.", "デフォルト値が正しい JSON なら、その対応するデータ構造のまま保持されます。", "기본값 자체가 유효한 JSON이면 해당 데이터 구조로 유지됩니다.", "Si el valor por defecto es JSON válido, se conserva como la estructura correspondiente."),
                mode: "strict",
                source: `{
  sinkhorn_epsilon: "\${sid_sinkhorn_epsilon:[0.0, 0.0, 0.003]}",
  metadata: '\${config:{"hello": "world", "owner": "jyonn"}}'
}`,
              },
              {
                title: l("带冒号的 JSON 值", "帶冒號的 JSON 值", "JSON values that contain colons", "Valeurs JSON contenant des deux-points", "コロンを含む JSON 値", "콜론이 들어간 JSON 값", "Valores JSON con dos puntos"),
                summary: l("内部冒号不会和顶层默认值分隔符混淆。", "內部冒號不會和頂層預設值分隔符混淆。", "Inner colons are not confused with the top-level default separator.", "Les deux-points internes ne sont pas confondus avec le séparateur de valeur par défaut.", "内部のコロンはトップレベルの区切りと衝突しません。", "내부 콜론은 최상위 기본값 구분자와 혼동되지 않습니다.", "Los dos puntos internos no se confunden con el separador principal del valor por defecto."),
                mode: "strict",
                source: `{
  value: '\${config:{"hello": "a:b", "url": "https://example.com"}}'
}`,
              },
              {
                title: l("主值优先", "主值優先", "Primary values win", "La valeur primaire l'emporte", "主値が優先される", "기존 값이 우선", "El valor principal gana"),
                summary: l("一旦主路径上有值，就不会再去用默认值。", "一旦主路徑上有值，就不會再去用預設值。", "Once the primary path resolves, the fallback is ignored.", "Dès que le chemin principal se résout, la valeur de secours est ignorée.", "主パスが解決できればフォールバックは使われません。", "주 경로가 해석되면 fallback은 무시됩니다.", "Si la ruta principal se resuelve, el fallback se ignora."),
                mode: "strict",
                source: `{
  sid_sinkhorn_epsilon: [1.0, 2.0, 3.0],
  sinkhorn_epsilon: "\${sid_sinkhorn_epsilon:[0.0, 0.0, 0.003]}"
}`,
              },
              {
                title: l("嵌套 fallback chain", "巢狀 fallback chain", "Nested fallback chains", "Chaînes de secours imbriquées", "ネストしたフォールバック連鎖", "중첩 fallback chain", "Cadenas de fallback anidadas"),
                summary: l("一个缺失值可以回落到另一个引用，而后者也可以再带 typed default。", "一個缺失值可以退回到另一個引用，而後者也可以再帶 typed default。", "One missing value can fall back to another reference, which can itself carry a typed default.", "Une valeur manquante peut se rabattre sur une autre référence, qui peut aussi porter une valeur typée.", "欠損値は別の参照へフォールバックでき、その参照も型付きデフォルトを持てます。", "하나의 누락 값은 다른 참조로 fallback할 수 있고, 그 참조도 다시 typed default를 가질 수 있습니다.", "Un valor faltante puede caer en otra referencia, y esa referencia también puede tener un valor tipado."),
                mode: "strict",
                source: `{
  repr_source_model: "text-embedding-3-small",
  embedding_model: "\${sid_embedding_model:\${repr_source_model:null}}"
}`,
              },
            ],
          },
        ],
        footer: l("下一页看 pipeline。", "下一頁看 pipeline。", "Next up: pipelines.", "Suite : les pipelines.", "次はパイプライン。", "다음은 pipeline입니다.", "Siguiente: pipelines."),
      },
      pipelines: {
        title: l("smartdict · 管道", "smartdict · 管線", "smartdict · pipelines", "smartdict · pipelines", "smartdict · パイプライン", "smartdict · 파이프라인", "smartdict · pipelines"),
        hero: {
          eyebrow: l("特性页", "特性頁", "Feature page", "Page de fonctionnalité", "機能ページ", "기능 페이지", "Página de función"),
          title: l("管道", "管線", "Pipelines", "Pipelines", "パイプライン", "파이프라인", "Pipelines"),
          text: l(
            "pipeline 会在引用解析完成之后再执行。顺序是：先找值，找不到则套默认值，最后从左到右依次过 stage。",
            "pipeline 會在引用解析完成之後再執行。順序是：先找值，找不到則套預設值，最後從左到右依序過 stage。",
            "Pipelines run after reference resolution. The order is fixed: resolve first, apply the default if needed, then execute stages from left to right.",
            "Les pipelines s'exécutent après la résolution. L'ordre est fixe : on résout d'abord, on applique la valeur par défaut si nécessaire, puis on exécute les étapes de gauche à droite.",
            "パイプラインは参照解決の後に実行されます。順序は固定で、値解決 -> デフォルト適用 -> 左から右へ stage 実行です。",
            "pipeline은 참조 해석 후에 실행됩니다. 순서는 고정이며 값 해석 -> 기본값 적용 -> 왼쪽에서 오른쪽으로 stage 실행입니다.",
            "Los pipelines se ejecutan después de resolver la referencia. El orden es fijo: primero se resuelve, luego se aplica el valor por defecto y al final las etapas se ejecutan de izquierda a derecha."
          ),
        },
        sections: [
          {
            type: "cards",
            kicker: l("执行顺序", "執行順序", "Execution order", "Ordre d'exécution", "実行順序", "실행 순서", "Orden de ejecución"),
            title: l("流程固定", "流程固定", "The order is fixed", "L'ordre est fixe", "順序は固定です", "순서는 고정입니다", "El orden es fijo"),
            cards: [
              { title: "1. Resolve", text: l("先根据路径找到引用值。", "先根據路徑找到引用值。", "Resolve the reference from the current object.", "Résolvez la référence dans l'objet courant.", "現在のオブジェクトから参照を解決します。", "현재 객체에서 참조를 해석합니다.", "Resuelve la referencia desde el objeto actual.") },
              { title: "2. Default", text: l("如果缺失，再应用默认值。", "如果缺失，再套用預設值。", "If it is missing, apply the default.", "S'il manque, appliquez la valeur par défaut.", "見つからなければデフォルト値を使います。", "없으면 기본값을 적용합니다.", "Si falta, aplica el valor por defecto.") },
              { title: "3. Transform", text: l("最后按顺序走过所有 stage。", "最後依序經過所有 stage。", "Finally, run all pipeline stages in sequence.", "Enfin, exécutez les étapes du pipeline dans l'ordre.", "最後にすべての stage を順番に実行します。", "마지막으로 모든 stage를 순서대로 실행합니다.", "Por último, ejecuta todas las etapas en secuencia.") },
            ],
          },
          {
            type: "cases",
            kicker: l("案例", "案例", "Cases", "Cas", "ケース", "사례", "Casos"),
            title: l("把值继续变成你真正要用的类型", "把值繼續變成你真正要用的型別", "Turn values into the types you actually want", "Transformez les valeurs dans les types réellement utiles", "本当に使いたい型へ変換する", "실제로 원하는 타입으로 바꾸기", "Convierte los valores en los tipos que realmente necesitas"),
            cases: [
              {
                title: l("清洗字符串并生成 slug", "清洗字串並產生 slug", "Clean strings and generate slugs", "Nettoyer une chaîne et produire un slug", "文字列を整えて slug を作る", "문자열 정리와 slug 생성", "Limpiar cadenas y generar slugs"),
                summary: l("典型的数据集名清洗链路。", "典型的資料集名稱清洗鏈路。", "A typical cleanup chain for dataset names.", "Chaîne de nettoyage typique pour des noms de jeux de données.", "データセット名を整える典型例です。", "데이터셋 이름을 정리하는 전형적인 체인입니다.", "Una cadena típica para limpiar nombres de datasets."),
                mode: "strict",
                source: `{
  dataset: "  My Dataset  ",
  save_dir: "\${dataset|strip|lower|slug}"
}`,
              },
              {
                title: l("默认值后接转换", "預設值後接轉換", "Convert after applying a default", "Convertir après application d'une valeur par défaut", "デフォルト後に変換", "기본값 적용 후 변환", "Convertir después del valor por defecto"),
                summary: l("缺失时用 8000，再把结果转成整数。", "缺失時用 8000，再把結果轉成整數。", "Use 8000 when missing, then convert the result to an integer.", "Utilisez 8000 si la valeur manque, puis convertissez le résultat en entier.", "欠損時は 8000 を使い、その後で整数に変換します。", "없으면 8000을 쓰고 그 결과를 정수로 변환합니다.", "Usa 8000 si falta y luego convierte el resultado a entero."),
                mode: "strict",
                source: `{
  port: "\${env.PORT:8000|int}"
}`,
              },
              {
                title: l("已有值也能继续过 stage", "既有值也能繼續過 stage", "Existing values still pass through stages", "Les valeurs existantes passent aussi par les étapes", "既存値も stage を通る", "기존 값도 stage를 통과", "Los valores existentes también pasan por las etapas"),
                summary: l("主值命中后，stage 仍然会继续执行。", "主值命中後，stage 仍然會繼續執行。", "Even when the primary value exists, the pipeline still runs.", "Même si la valeur principale existe, le pipeline s'exécute toujours.", "主値が存在してもパイプラインは続行されます。", "기존 값이 있어도 pipeline은 계속 실행됩니다.", "Aunque exista el valor principal, el pipeline sigue ejecutándose."),
                mode: "strict",
                source: `{
  env: { PORT: "9000" },
  port: "\${env.PORT:8000|int}"
}`,
              },
              {
                title: l("JSON stage", "JSON stage", "JSON stage", "Étape JSON", "JSON stage", "JSON stage", "Etapa JSON"),
                summary: l("把已经是字符串的 JSON 再解码成结构化对象。", "把已經是字串的 JSON 再解碼成結構化物件。", "Decode a stringified JSON value into a structured object.", "Décoder une chaîne JSON en objet structuré.", "文字列化された JSON を構造化オブジェクトへ戻します。", "문자열 JSON을 구조화 객체로 디코딩합니다.", "Decodifica una cadena JSON en un objeto estructurado."),
                mode: "strict",
                source: `{
  raw: '{"hello": "world"}',
  value: "\${raw|json}"
}`,
              },
              {
                title: l("嵌套默认值后继续 lower", "巢狀預設值後繼續 lower", "Lowercase after a nested default", "Passer en minuscules après un défaut imbriqué", "ネストしたデフォルトの後に lower", "중첩 기본값 뒤에 lower", "Aplicar lower después de un valor por defecto anidado"),
                summary: l("fallback chain 结束后，依然可以继续做字符串转换。", "fallback chain 結束後，依然可以繼續做字串轉換。", "After the fallback chain resolves, string transforms can still run.", "Après résolution de la chaîne de secours, les transformations de chaîne peuvent encore s'exécuter.", "フォールバック解決後でも文字列変換を続けられます。", "fallback chain이 끝난 뒤에도 문자열 변환을 계속할 수 있습니다.", "Después de resolver la cadena de fallback, aún se pueden aplicar transformaciones de cadena."),
                mode: "strict",
                source: `{
  repr_source_model: "TEXT-EMBEDDING-3-SMALL",
  embedding_model: "\${sid_embedding_model:\${repr_source_model:null}|lower}"
}`,
              },
            ],
          },
        ],
        footer: l("下一页看模式与错误。", "下一頁看模式與錯誤。", "Next up: modes and errors.", "Suite : modes et erreurs.", "次はモードとエラー。", "다음은 모드와 오류입니다.", "Siguiente: modos y errores."),
      },
      modes: {
        title: l("smartdict · 模式与错误", "smartdict · 模式與錯誤", "smartdict · modes", "smartdict · modes", "smartdict · モード", "smartdict · 모드", "smartdict · modos"),
        hero: {
          eyebrow: l("特性页", "特性頁", "Feature page", "Page de fonctionnalité", "機能ページ", "기능 페이지", "Página de función"),
          title: l("模式与错误", "模式與錯誤", "Modes & errors", "Modes & erreurs", "モードとエラー", "모드와 오류", "Modos y errores"),
          text: l(
            "smartdict 提供严格、部分、迭代三种策略，也提供了针对缺失引用、环引用和 stage 失败的结构化错误。",
            "smartdict 提供嚴格、部分、迭代三種策略，也提供了針對缺失引用、環引用與 stage 失敗的結構化錯誤。",
            "smartdict offers strict, partial, and iterative strategies along with structured errors for missing references, cycles, and stage failures.",
            "smartdict propose les stratégies strict, partial et iterative, ainsi que des erreurs structurées pour références manquantes, cycles et échecs d'étape.",
            "smartdict は strict / partial / iterative の3戦略と、未解決参照・循環・stage失敗向けの構造化エラーを提供します。",
            "smartdict는 strict, partial, iterative 세 가지 전략과 미해결 참조, 순환, stage 실패용 구조화 오류를 제공합니다.",
            "smartdict ofrece estrategias strict, partial e iterative, junto con errores estructurados para referencias faltantes, ciclos y fallos de etapa."
          ),
        },
        sections: [
          {
            type: "cases",
            kicker: l("模式与错误", "模式與錯誤", "Modes and errors", "Modes et erreurs", "モードとエラー", "모드와 오류", "Modos y errores"),
            title: l("失败时怎么表现，取决于你选择的模式", "失敗時怎麼表現，取決於你選擇的模式", "Behavior on failure depends on the mode you choose", "Le comportement en cas d'échec dépend du mode choisi", "失敗時の挙動は選ぶモードで変わる", "실패 시 동작은 선택한 모드에 따라 달라집니다", "El comportamiento ante fallos depende del modo que elijas"),
            cases: [
              {
                title: l("严格模式", "嚴格模式", "Strict mode", "Mode strict", "strict モード", "strict 모드", "Modo strict"),
                summary: l("缺失引用会直接抛错，适合最终配置落盘前的校验。", "缺失引用會直接拋錯，適合最終設定落盤前的校驗。", "Missing references raise immediately, which is ideal before finalizing a config.", "Les références manquantes lèvent immédiatement une erreur, idéal avant de figer une configuration.", "未解決参照は即座にエラーになり、最終設定の検証に向いています。", "누락된 참조는 즉시 오류를 발생시키므로 최종 설정 검증에 적합합니다.", "Las referencias faltantes generan un error inmediato, ideal antes de cerrar la configuración."),
                mode: "strict",
                source: `{
  a: "\${missing}"
}`,
              },
              {
                title: l("部分模式", "部分模式", "Partial mode", "Mode partiel", "partial モード", "partial 모드", "Modo partial"),
                summary: l("缺失引用会保留占位符形状，方便分阶段补配置。", "缺失引用會保留佔位符形狀，方便分階段補設定。", "Missing references keep their placeholder form, which is useful during staged config authoring.", "Les références manquantes conservent leur forme de placeholder, utile pour l'édition progressive.", "未解決参照はプレースホルダの形を保つため、段階的な設定作成に便利です。", "누락된 참조는 플레이스홀더 형태를 유지해 단계적 설정 작성에 유용합니다.", "Las referencias faltantes conservan su forma de marcador, útil al construir la configuración por etapas."),
                mode: "partial",
                source: `{
  a: "\${missing}",
  b: "pre-\${missing}-post",
  c: "\${missing}$",
  d: "\${dataset|slug}"
}`,
              },
              {
                title: l("迭代模式", "迭代模式", "Iterative mode", "Mode itératif", "iterative モード", "iterative 모드", "Modo iterative"),
                summary: l("第一轮先生成 key，第二轮后续引用才会真正看到它。把 iterations 改成 1 和 2 对比一下最直观。", "第一輪先生成 key，第二輪後續引用才會真正看到它。把 iterations 改成 1 和 2 對比一下最直觀。", "The first pass creates the key, and only the second pass lets downstream references see it. Switching between iterations 1 and 2 makes the behavior obvious.", "Le premier passage crée la clé, et seul le second permet aux références aval de la voir. Passez de 1 à 2 itérations pour voir la différence.", "1回目で key が生成され、2回目で後続参照がそれを見られるようになります。iterations を 1 と 2 で比べると分かりやすいです。", "첫 번째 패스에서 key가 생성되고, 두 번째 패스에서야 뒤쪽 참조가 그것을 볼 수 있습니다. iterations를 1과 2로 바꿔 보면 가장 직관적입니다.", "La primera pasada crea la clave y solo la segunda permite que las referencias posteriores la vean. Cambiar entre iteraciones 1 y 2 lo hace muy evidente."),
                mode: "iterative",
                iterations: 2,
                source: `{
  x: "y",
  "\${x}": 123,
  a: "\${y}"
}`,
              },
              {
                title: l("嵌套缺失引用", "巢狀缺失引用", "Nested missing reference", "Référence manquante imbriquée", "ネストした未解決参照", "중첩된 누락 참조", "Referencia faltante anidada"),
                summary: l("更深层的缺失会在 strict 模式下汇总成结构化错误。", "更深層的缺失會在 strict 模式下彙總成結構化錯誤。", "Deeper missing references are still surfaced as structured errors in strict mode.", "Les références manquantes profondes remontent aussi comme erreurs structurées en mode strict.", "深い階層の未解決参照も strict では構造化エラーとして返ります。", "더 깊은 누락 참조도 strict 모드에서는 구조화 오류로 노출됩니다.", "Las referencias faltantes profundas también aparecen como errores estructurados en modo strict."),
                mode: "strict",
                source: `{
  app: { profile: "prod" },
  services: {
    prod: {
      url: "\${config.endpoints.api}"
    }
  },
  result: "\${services.\${app.profile}.url}"
}`,
              },
              {
                title: l("环引用", "環引用", "Circular references", "Références circulaires", "循環参照", "순환 참조", "Referencias circulares"),
                summary: l("一旦依赖链回到了自己，就会抛出循环依赖错误。", "一旦依賴鏈回到了自己，就會拋出循環依賴錯誤。", "As soon as the dependency chain loops back to itself, smartdict raises a circular-reference error.", "Dès que la chaîne de dépendances revient sur elle-même, smartdict lève une erreur de référence circulaire.", "依存チェーンが自分に戻ると循環参照エラーになります。", "의존 체인이 자기 자신으로 돌아오면 순환 참조 오류가 발생합니다.", "En cuanto la cadena de dependencias vuelve a sí misma, smartdict lanza un error de referencia circular."),
                mode: "strict",
                source: `{
  app: {
    profile: "\${services.primary.profile}$"
  },
  services: {
    primary: {
      profile: "\${app.profile}$"
    }
  }
}`,
              },
              {
                title: l("stage 失败", "stage 失敗", "Pipeline stage failure", "Échec d'étape de pipeline", "パイプライン stage 失敗", "pipeline stage 실패", "Fallo de etapa del pipeline"),
                summary: l("未知 stage 或非法转换都会抛 `PipelineStageError`。", "未知 stage 或非法轉換都會拋 `PipelineStageError`。", "Unknown stages and invalid conversions both raise `PipelineStageError`.", "Les étapes inconnues et conversions invalides lèvent `PipelineStageError`.", "未知 stage や不正変換は `PipelineStageError` になります。", "알 수 없는 stage나 잘못된 변환은 `PipelineStageError`를 발생시킵니다.", "Las etapas desconocidas y las conversiones inválidas generan `PipelineStageError`."),
                mode: "strict",
                source: `{
  port: "\${env.PORT:abc|int}"
}`,
              },
            ],
          },
        ],
        footer: l("下一页看组合场景。", "下一頁看組合場景。", "Next up: recipes.", "Suite : recettes.", "次はレシピです。", "다음은 레시피입니다.", "Siguiente: recetas."),
      },
      recipes: {
        title: l("smartdict · 场景", "smartdict · 場景", "smartdict · recipes", "smartdict · recettes", "smartdict · レシピ", "smartdict · 레시피", "smartdict · recetas"),
        hero: {
          eyebrow: l("场景页", "場景頁", "Scenario page", "Page scénario", "シナリオページ", "시나리오 페이지", "Página de escenarios"),
          title: l("场景", "場景", "Recipes", "Recipes", "レシピ", "레시피", "Recetas"),
          text: l(
            "这些案例把几个功能一起组合，尽量靠近真实配置，而不是只展示单个语法点。",
            "這些案例把幾個功能一起組合，盡量靠近真實設定，而不是只展示單個語法點。",
            "These recipes combine multiple features at once so they look closer to real configs rather than isolated syntax tricks.",
            "Ces recettes combinent plusieurs fonctionnalités à la fois pour ressembler à de vraies configurations plutôt qu'à des astuces isolées.",
            "これらの例は複数機能を組み合わせ、単なる構文断片ではなく実際の設定に近づけています。",
            "이 레시피들은 여러 기능을 함께 조합해 실제 설정에 더 가깝게 구성했습니다.",
            "Estas recetas combinan varias funciones a la vez para parecerse más a configuraciones reales que a trucos de sintaxis aislados."
          ),
        },
        sections: [
          {
            type: "cases",
            kicker: l("场景", "場景", "Scenarios", "Scénarios", "シナリオ", "시나리오", "Escenarios"),
            title: l("把 feature 组合起来看", "把 feature 組合起來看", "See features in combination", "Voir les fonctionnalités en combinaison", "機能を組み合わせてみる", "기능을 조합해서 보기", "Ver las funciones en combinación"),
            cases: [
              {
                title: l("实验配置", "實驗設定", "Experiment config", "Configuration d'expérience", "実験設定", "실험 설정", "Configuración de experimento"),
                summary: l("典型的训练配置，重用路径和网络形状。", "典型的訓練設定，重用路徑與網路形狀。", "A typical training config with reusable paths and network shape fields.", "Une configuration d'entraînement typique avec chemins réutilisables et forme de réseau.", "パスとネットワーク形状を再利用する典型的な学習設定です。", "경로와 네트워크 형태를 재사용하는 전형적인 학습 설정입니다.", "Una configuración típica de entrenamiento con rutas y forma de red reutilizables."),
                mode: "strict",
                source: `{
  dataset: "spotify",
  load: {
    base_path: "~/data/\${dataset}",
    dev_path: "\${load.base_path}/dev"
  },
  network: {
    num_hidden_layers: 3,
    num_attention_heads: 8
  },
  store: "checkpoints/\${dataset}/\${network.num_hidden_layers}L\${network.num_attention_heads}H/"
}`,
              },
              {
                title: l("Embedding 模型 fallback", "Embedding 模型 fallback", "Embedding model fallback", "Repli de modèle d'embedding", "Embedding モデルのフォールバック", "Embedding 모델 fallback", "Fallback de modelo de embedding"),
                summary: l("更具体的字段优先，否则退回到共享来源模型。", "更具體的欄位優先，否則退回到共享來源模型。", "Prefer a more specific field, otherwise fall back to a shared source model.", "Privilégiez un champ plus spécifique, sinon repliez-vous sur un modèle source partagé.", "より具体的なフィールドを優先し、なければ共有ソースモデルへ戻します。", "더 구체적인 필드를 우선하고 없으면 공통 소스 모델로 fallback합니다.", "Prefiere un campo más específico y, si falta, vuelve a un modelo fuente compartido."),
                mode: "strict",
                source: `{
  repr_source_model: "text-embedding-3-small",
  embedding_model: "\${sid_embedding_model:\${repr_source_model:null}}"
}`,
              },
              {
                title: l("运行时参数", "執行時參數", "Runtime settings", "Paramètres runtime", "ランタイム設定", "런타임 설정", "Ajustes de runtime"),
                summary: l("通过 pipeline 把字符串环境值变成真正可用的类型。", "透過 pipeline 把字串環境值變成真正可用的型別。", "Use pipelines to turn stringly env-style values into practical types.", "Utilisez des pipelines pour transformer des valeurs d'environnement textuelles en types pratiques.", "文字列ベースの環境値を実用的な型へ変換します。", "문자열 기반 환경 값을 실사용 타입으로 변환합니다.", "Usa pipelines para convertir valores de entorno en cadena en tipos prácticos."),
                mode: "strict",
                source: `{
  env: {
    DEBUG: "true",
    PORT: "8080"
  },
  debug: "\${env.DEBUG:false|bool}",
  port: "\${env.PORT:8000|int}",
  save_dir: '\${dataset:"My Dataset"|strip|lower|slug}'
}`,
              },
              {
                title: l("JSON 元数据 fallback", "JSON 中繼資料 fallback", "JSON metadata fallback", "Repli de métadonnées JSON", "JSON メタデータフォールバック", "JSON 메타데이터 fallback", "Fallback de metadatos JSON"),
                summary: l("用对象默认值为结构化元信息兜底。", "用物件預設值為結構化中繼資訊兜底。", "Use an object fallback for structured metadata.", "Utilisez un repli objet pour des métadonnées structurées.", "構造化メタデータにオブジェクトフォールバックを使います。", "구조화 메타데이터에 객체 fallback을 사용합니다.", "Usa un fallback de objeto para metadatos estructurados."),
                mode: "strict",
                source: `{
  metadata: '\${config:{"hello": "world", "owner": "jyonn"}}'
}`,
              },
              {
                title: l("对象驱动的 profile 选择", "物件驅動的 profile 選擇", "Object-driven profile switching", "Bascule de profil pilotée par objet", "オブジェクト駆動の profile 切替", "객체 기반 profile 전환", "Cambio de perfil impulsado por objeto"),
                summary: l("对象属性决定走哪套服务配置。", "物件屬性決定走哪套服務設定。", "An object attribute decides which service profile to read.", "Un attribut d'objet détermine quel profil de service utiliser.", "オブジェクト属性で読むサービスプロファイルを決めます。", "객체 속성이 어떤 서비스 프로필을 읽을지 결정합니다.", "Un atributo del objeto decide qué perfil de servicio leer."),
                mode: "strict",
                source: `class Config {
  constructor() {
    this.profile = "prod";
  }
}

return {
  app: new Config(),
  services: {
    prod: { url: "https://example.com" },
    dev: { url: "http://localhost:8000" }
  },
  selected_url: "\${services.\${app.profile}.url}"
};`,
                pythonSource: `class Config:
  def __init__(self):
    self.profile = "prod"


{
  "app": Config(),
  "services": {
    "prod": {"url": "https://example.com"},
    "dev": {"url": "http://localhost:8000"},
  },
  "selected_url": "\${services.\${app.profile}.url}",
}`,
              },
            ],
          },
        ],
        footer: l("可以继续去 Playground 自由修改。", "可以繼續去 Playground 自由修改。", "You can continue in the playground for freer edits.", "Vous pouvez continuer dans le playground pour des essais plus libres.", "さらに自由に触るなら playground へ。", "더 자유롭게 바꾸려면 playground로 가세요.", "Puedes continuar en el playground para editar con más libertad."),
      },
      playground: {
        title: l("smartdict · playground", "smartdict · playground", "smartdict · playground", "smartdict · playground", "smartdict · playground", "smartdict · playground", "smartdict · playground"),
        hero: {
          eyebrow: l("交互页", "互動頁", "Interactive page", "Page interactive", "インタラクティブページ", "인터랙티브 페이지", "Página interactiva"),
          title: l("Playground", "Playground", "Playground", "Playground", "Playground", "Playground", "Playground"),
          text: l(
            "这里放的是更偏“拿来改”的案例。你可以直接把它当成 smartdict-js 的在线实验台，也可以拿它验证 Python 配置行为。",
            "這裡放的是更偏「拿來改」的案例。你可以直接把它當成 smartdict-js 的線上實驗台，也可以拿它驗證 Python 設定行為。",
            "This page leans more toward open-ended tinkering. Use it as an online lab for smartdict-js or as a fast way to validate Python config behavior.",
            "Cette page est pensée pour l'exploration libre. Utilisez-la comme laboratoire en ligne pour smartdict-js ou comme validation rapide du comportement Python.",
            "このページは自由に試すための場所です。smartdict-js のオンライン実験台としても、Python 設定挙動の確認にも使えます。",
            "이 페이지는 자유롭게 실험하기 위한 곳입니다. smartdict-js의 온라인 실험실이자 Python 설정 동작을 빠르게 검증하는 도구로 쓸 수 있습니다.",
            "Esta página está pensada para experimentar libremente. Úsala como laboratorio en línea para smartdict-js o para validar rápidamente el comportamiento de la configuración en Python."
          ),
        },
        sections: [
          {
            type: "cases",
            kicker: l("自由编辑", "自由編輯", "Edit freely", "Édition libre", "自由編集", "자유 편집", "Edición libre"),
            title: l("从这些起步，然后继续改", "從這些起步，然後繼續改", "Start from these, then keep editing", "Partez de ces exemples puis continuez à modifier", "ここから始めて自由に改変", "이 예제에서 시작해 계속 바꾸기", "Empieza con estos y sigue editando"),
            body: l(
              "这里的案例默认左侧直接编辑，编辑时保持高亮；当输入框失焦时，右侧结果会自动重新编译。",
              "這裡的案例預設左側直接編輯，編輯時保持高亮；當輸入框失焦時，右側結果會自動重新編譯。",
              "Examples here are edited directly on the left with live highlighting, and the right pane recompiles automatically when the editor loses focus.",
              "Les exemples se modifient directement à gauche avec coloration en direct, et le panneau de droite se recompile automatiquement lorsque l'éditeur perd le focus.",
              "ここでは左側を直接編集でき、入力中もハイライトされます。フォーカスが外れると右側が自動再コンパイルされます。",
              "여기서는 왼쪽을 직접 편집할 수 있고 입력 중에도 하이라이트됩니다. 포커스가 빠지면 오른쪽 결과가 자동으로 다시 컴파일됩니다.",
              "Aquí los ejemplos se editan directamente a la izquierda con resaltado en vivo, y el panel derecho se recompila automáticamente cuando el editor pierde el foco."
            ),
            cases: [
              {
                title: l("路径与 slug", "路徑與 slug", "Paths and slugs", "Chemins et slugs", "パスと slug", "경로와 slug", "Rutas y slugs"),
                summary: l("一个适合先热手的基础案例。", "一個適合先熱手的基礎案例。", "A gentle starting example to warm up.", "Un bon exemple pour démarrer en douceur.", "まず手を慣らすのに向いた基本例です。", "가볍게 시작하기 좋은 기본 예제입니다.", "Un ejemplo básico ideal para empezar."),
                mode: "strict",
                source: `{
  dataset: "Spotify Search",
  load: {
    base_path: "~/data/\${dataset}",
    dev_path: "\${load.base_path}/dev"
  },
  save_dir: "\${dataset|strip|lower|slug}",
  port: "\${env.PORT:8000|int}"
}`,
              },
              {
                title: l("JSON fallback", "JSON fallback", "JSON fallback", "Fallback JSON", "JSON フォールバック", "JSON fallback", "Fallback JSON"),
                summary: l("试试把数组、对象或者冒号字符串一起改掉。", "試試把陣列、物件或冒號字串一起改掉。", "Try editing the array, object, or colon-heavy string all at once.", "Essayez de modifier le tableau, l'objet ou la chaîne contenant des deux-points.", "配列・オブジェクト・コロン入り文字列をまとめて変えてみてください。", "배열, 객체, 콜론이 많은 문자열을 함께 바꿔보세요.", "Prueba cambiar el arreglo, el objeto o la cadena con dos puntos."),
                mode: "strict",
                source: `{
  sinkhorn_epsilon: "\${sid_sinkhorn_epsilon:[0.0, 0.0, 0.003]}",
  metadata: '\${config:{"owner": "jyonn", "flags": ["docs", "demo"]}}',
  quoted: '\${config:{"hello": "a:b", "url": "https://example.com"}}'
}`,
              },
              {
                title: l("fallback chain + lower", "fallback chain + lower", "Fallback chain + lower", "Chaîne de secours + lower", "フォールバック連鎖 + lower", "fallback chain + lower", "Cadena fallback + lower"),
                summary: l("这个案例适合测试是否真的理解了解析顺序。", "這個案例適合測試是否真的理解了解析順序。", "This one is useful for checking whether you really understand the resolution order.", "Celui-ci est utile pour vérifier que l'ordre de résolution est bien compris.", "解決順序の理解を試すのに向いています。", "해석 순서를 제대로 이해했는지 확인하기 좋습니다.", "Este caso sirve para comprobar si realmente entiendes el orden de resolución."),
                mode: "strict",
                source: `{
  repr_source_model: "TEXT-EMBEDDING-3-SMALL",
  embedding_model: "\${sid_embedding_model:\${repr_source_model:null}|lower}"
}`,
              },
              {
                title: l("partial 占位符", "partial 佔位符", "Partial placeholders", "Placeholders partiels", "partial プレースホルダ", "partial 플레이스홀더", "Marcadores partial"),
                summary: l("切到 partial 后，右侧会保留未解析的占位符。", "切到 partial 後，右側會保留未解析的佔位符。", "Switch to partial and the unresolved placeholders remain visible on the right.", "Passez en partial et les placeholders non résolus restent visibles à droite.", "partial に切り替えると未解決プレースホルダが右側に残ります。", "partial로 바꾸면 미해결 플레이스홀더가 오른쪽에 남습니다.", "Cambia a partial y los marcadores no resueltos permanecerán visibles a la derecha."),
                mode: "partial",
                source: `{
  a: "\${missing}",
  b: "pre-\${missing}-post",
  c: "\${missing}$",
  d: "\${dataset|slug}"
}`,
              },
              {
                title: l("多跳迭代", "多跳迭代", "Multi-hop iteration", "Itération multi-sauts", "多段イテレーション", "다중 홉 반복", "Iteración multi-salto"),
                summary: l("把 iterations 改成 1、2、3 看看右侧有什么变化。", "把 iterations 改成 1、2、3 看看右側有什麼變化。", "Try changing iterations to 1, 2, or 3 and watch the right pane change.", "Essayez de changer les itérations à 1, 2 ou 3 et observez la différence.", "iterations を 1 / 2 / 3 に変えて右側の変化を見てみてください。", "iterations를 1, 2, 3으로 바꿔 보며 오른쪽 변화를 확인해 보세요.", "Prueba cambiar las iteraciones a 1, 2 o 3 y observa cómo cambia el panel derecho."),
                mode: "iterative",
                iterations: 2,
                source: `{
  a: "\${b}",
  b: "\${c}",
  c: "ok"
}`,
              },
            ],
          },
        ],
        footer: l("需要查语法时，随时回到其他页面。", "需要查語法時，隨時回到其他頁面。", "Jump back to the other pages whenever you need syntax details.", "Revenez aux autres pages dès que vous avez besoin d'un détail de syntaxe.", "構文を確認したくなったら他ページへ戻れます。", "구문이 필요하면 언제든 다른 페이지로 돌아갈 수 있습니다.", "Vuelve a las otras páginas cuando necesites detalles de sintaxis."),
      },
    },
  };

  window.HANDBOOK_CONTENT = handbook;
})();
