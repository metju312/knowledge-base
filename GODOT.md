# Must learn

---

# GDScript

---

`Składnia`
* `@export var pipe_scene : PackedScene` - pozwala na instantowanie konkretnej sceny w innej scenie poprzez: `var pipe = pipe_scene.instantiate()`
* `Array`


    var pipes: Array
    pipes.clear()
    for pipe in pipes:
      pipe.position.x -= SCROLL_SPEED
    add_child(pipe) // dodaje Scenę do sceny?
    var pipe = pipe_scene.instantiate()
    pipes.append(pipe)


`Life cycle`
* `func _ready():` - uruchamiana raz na początku
* `func _physics_process(delta):` - pętla uruchamiana w dokładnie takich samych momentach na każdym komputerze - do obsługi fizyki
* 
---

`Komunikacja pomiędzy Nodami`
* 



---

# Nodes

* `Area2D` - ma sygnał body.enter używane np do kolizji
* `CharacterBody2D` - dla poruszających się postaci i wrogów
* `CollisionShape2D` - zawsze przy kolizjach
* `AnimatedSprite2D`
*   do animacji 2D
  * można przeciągać kilka plików tworzących 1 animację
  * można użyć 1 pliku z kilkoma obrazkami i wycinać animacje
  * można umieszczać wiele animacji w 1 pliku
* `Sprite2D` - statyczne obrazji - bez animacji

---