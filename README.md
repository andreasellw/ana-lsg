# ana-lsg
Dies ist eine Mitschrift des Übungsbetriebs der Vorlesung [Analysis I für Informatiker und Statistiker](http://www.mathematik.uni-muenchen.de/~nissen/analysis2015/) im Wintersemester 2015/16 bei Prof. Dr. Peter Pickl. Ohne Anspruch auf Richtigkeit oder Vollständigkeit.

### Kodierung
UTF-8 beim editieren und abspeichern der .tex-Dateien beachten.


### pdflatex
```tex
$ pdflatex -interaction=nonstopmode -output-directory=output -synctex=1 ana-lsg.tex
```

### .tex-Dateien beobachten und automatisch das PDF aktualisieren

Zuerst muss Homebrew installiert werden.
Dann npm und gulp.

- [Homebrew](http://brew.sh/)
- `$ brew install node`
- `$ npm install -g gulp`

Dann einfach dieses Repository herunterladen & entpacken.
Lokal im Ordner von unserem Repository Gulp (local) installieren. Und Gulp watch starten. Sobald nun eine .tex-Datei verändert & abgespeichert wird, wird der pdflatex Befehl ausgeführt.

- `$ npm install`
- `$ gulp watch`

gulp watch kann via CTRL+C wieder beendet werden.

### Dokumenationen der geladenen Packete in [pkg.tex](https://github.com/andreasellw/ana-lsg/blob/master/add/pkg.tex)
* [fontenc](https://www.ctan.org/pkg/fontenc)
* [inputenc](https://www.ctan.org/pkg/inputenc)
* [babel](https://www.ctan.org/pkg/babel)
* [geometry](https://www.ctan.org/pkg/geometry)
* [hyperref](https://www.ctan.org/pkg/hyperref)
* [enumitem](https://www.ctan.org/pkg/enumitem)
* [amsmath](https://www.ctan.org/pkg/amsmath)
* [amssymb](https://www.ctan.org/pkg/amssymb)
* [amsthm](https://www.ctan.org/pkg/amsthm)
* [mathptmx](https://www.ctan.org/pkg/mathptmx)
* [datetime2](https://www.ctan.org/pkg/datetime2)
* [setspace](https://www.ctan.org/pkg/setspace)

### Layout testen
Folgende Packete sind für das Testen des Layouts hilfreich
```tex
\usepackage{showframe}
\usepackage{blindtext}
```
Mit letzterem kann man einfach ein Dummy-Dokument mit
```tex
\tableofcontents
\Blinddocument
```
erzeugen.

### neues Blatt
Ein neues Blatt einfach nach der Vorlage [neuesblatt.tex](https://github.com/andreasellw/ana-lsg/blob/master/neuesblatt.tex) erstellen. Und am Schluß die zugehörige Zeile in die ana-lsg.tex Datei einfügen.
