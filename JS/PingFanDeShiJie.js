 // 自定义字符串,用于拼接标签
 var loveStr = "";

 //自定义数组
 var loveArr = [{
    words: ' 社会在变化，生活在变化，人也在变化；没有什么是一成不变的，包括人的关系。'
}, {
    words: '指针没有在那一时刻停留。时间继续走向前去，永远也不再返回到它经过的地方了'
}, {
    words: '多少美好的东西消失和毁灭了，世界还像什么事也没有发生。是的，生活在继续着。可是生活中的每一个人却在不断地失去自己最珍贵的东西。 生活永远是美好的每人的痛苦却时时在发生。 '
}, {
    words: ' 伟大的生命。不论以何种形式，将会在宇宙间永存。我们这个小小星球上的人类。也将继续繁衍和发展，直至遥远的未来。可是，生命对于我们来说又多么短暂。不论是谁，总有一天，都将会走向自己的终点。死亡，这是伟人和凡人共有的最后归宿。热情的诗人高唱生命的恋歌，而冷静的哲学家却说：死亡是自然法则的胜利。'
}, {
    words: '美丽的花朵凋谢了也是美丽的。是的，美丽，美丽的花朵永不凋谢；那花依然在他心头开放。'
}, {
    words: '瞧，又是春天了。复苏的万物就是生命的写照'
}, {
    words: '生活总是美好的，生命在其间又是如此短暂；既然活着，就应该好好地活。'
}, {
    words: '精神上的消沉无异于自杀。'
}, {
    words: '有时候，往往一个极偶然的因素，就可能会改变一个人的生活。'
}, {
    words: '幸福不在于自己的丈夫从事什么样的职业，而在于两个人是否情投意合。金钱“荣誉“地位和真正的爱情并不相干。从古到今，向来如此！只要和自己所爱的人在一起，即便到天涯海角去生活也是幸福的。'
}, {
    words: '叶赛宁的诗，不惋惜，不呼唤，我也不啼哭。金黄的落叶堆满我心间。我已经再不是青春少年。'
}, {
    words: '院墙下爆开了一丛金灿灿的迎春花。这就是生命！没有什么力量能扼杀生命。生命是这样顽强，它对抗的是整整一个严寒的冬天。冬天退却了，生命之花却蓬勃地怒放。你为了这瞬间的辉煌，忍耐了多少暗淡无光的日月？你会死亡。但你也会证明生命有多么强大。死亡的只是躯壳，生命将涅盘，生生不息，并会以另一种形式永存。只要春天不死，生命就不会死。就会有迎春的花朵年年岁岁开放。哦。迎春花.....'
}, {
    words: '生活似乎走了一个令人难以置信的圆，'
}, {
    words: '在一个人的思想还没有强大到自己能完全把握自己的时候，就需要在精神上依托另一个比自己更强的人。但人在壮大过程中的每一个阶段，都需要求得当时比自己的认识更高明的指教。'
}, {
    words: '人们！你怎么能因为贫穷，就以物遮目，而变得如此愚蠢呢？'
}, {
    words: ' 无论是幸福还是苦难，无论是光荣还是屈辱，让他自己来遭遇和承受吧！'
}, {
    words: '一个有文化有知识而爱思考的人，一旦失去了自己的精神生活，那痛苦是无法言语的'
}, {
    words: '只要自己诚心待人，别人也才可能对自己以诚相待。'
}, {
    words: '人和人之间的友爱，并不在于是否是亲戚。是的，小时候，我们常常把亲戚这两字看得多么美好和重要。一旦长大成人，开始独立生活，我们便很快知道，亲戚关系常常是庸俗的；互相设法沾光，沾不上光就翻白眼；甚至你生活中最大的困难也常常是亲戚们造成的；生活同样会告诉你，亲戚往往不如朋友对你真诚。'
}, {
    words: '这样的城市是一个各色人等混杂的天地；而每一个层次的人又有自己的天地。最大的好处是，大街上谁也不认识谁，谁也不关心谁。他衣衫行装虽然破烂不堪，但只要不露羞丑，照样可以在这个世界里自由行走，别人连笑话你的兴趣都没有。'
}, {
    words: '虽然咱们出身低层人家，但不能小看自己。'
}, {
    words: '、最艰难的岁月也许过去了，而那贫困中一家人的相亲相爱是不是也要过去了呢？'
}, {
    words: '连伟人的一生都充满了那么大的艰辛，一个平凡的人吃点苦又算得了什么呢？他一生不可能做出什么惊人业绩，但他要学习伟人们对待生活的态度'
}, {
    words: '是的，他是在社会的最低层挣扎，为了几个钱而受尽折磨；但他已不仅仅将此看作是谋生活命——职业的高贵与低贱，不能说明一个人生活的价值。恰恰相反，他现在倒很”热爱“自己的苦难。通过一段血火般的洗礼，他相信，自己历尽千辛万苦而酿造出的生活之蜜，肯定比轻而易举拿来的更有滋味——他自嘲地把自己的这种认识叫做”关于苦难的学说“'
}, {
    words: '落魄的人只要和朋友呆在一块，心里就会踏实下来。'
}, {
    words: '人的感情有时候真是不可思议，他也许对人是冷漠的，但可以对一个动物怀着永远的眷恋。'
}, {
    words: '、在我们这个星球上，每天都要发生许多变化，有人倒霉了;有人走运了;有人在创造历史，历史也在成全或抛弃某些人。'
}, {
    words: '今天和昨天似乎没有什么不同;明天也可能和今天一样。也许人一生仅仅有那么一两个辉煌的瞬间--甚至一生都可能在平淡无奇中度过......'
}, {
    words: '生活不能等待别人来安排，要自己去争取和奋斗;而不论其结果是喜是悲，但可以慰藉的是，你总不枉在这世界上活了一场，有了这样的认识，你就会珍重生活，而不会玩世不恭;同时也会给人自身注入一种强大的内在力量......'
}, {
    words: '人只能按照自己的条件去寻找终生伴侣。'
}, {
    words: '在这个世界上，不是所有合理的和美好的都能按照自己的愿望存在或实现。'
}, {
    words: '在最平常的事情中都可以显示出一个人人格的伟大来。'
}, {
    words: '一个中学生要养成每天看报的习惯，这样才能开阔眼界；一个有文化的人不知道国家和世界发生了些什么事情，这是可悲的！'
}, {
    words: '人们宁愿去关心一个蹩脚电影演员的吃喝拉撒和鸡毛蒜皮，而不愿了解一个普通人波涛汹涌的内心世界…… '
}, {
    words: '你曾打开窗户，让我向外面的世界张望；你还用生硬的手拍打掉我从乡里带来的一身黄土，把你充满碳烟味的标志印烙在我的身上，老实说，你也没有能拍打净我身上的黄土；但我的身上确是烙下了你的印记！'
}, {
    words: '他们往往带着一种悲壮的激情，在一条最为艰难的道路上进行人生的搏斗。他们顾不上高谈阔论或愤世嫉俗的忧患人类的命运。他们首先要改变自己的生存条件，同时也放弃最主要的精神追求；他们既不鄙视普通人的世俗生活，但又竭力使自己对生活的认识达到更深的层次！'
}, {
    words: '生活中有那么一种人，你藐视甚至侮辱他，他不仅视为正常，还对你挺佩服；你要是在人格上对他平等相待，他反而小看你！'
}, {
    words: '只有努力工作，才能叫人尊重。'
}, {
    words: '你难道一辈子就这样生活下去吗？你最后的归宿在哪里？！'
}, {
    words: '男子汉应该是一种内在的品质，而不是靠化妆和表演就能显现出来的！'
}, {
    words: '你能痛苦，说明你对生活还抱有希望！'
}, {
    words: '人的生命力，是在痛苦的煎熬中强大起来的。'
}, {
    words: '我要扼住命运的咽喉，它他绝不会是我完全屈服。'
}, {
    words: '一个人的命运不是自己想改变就能改变了的，至于理想，只不过是职业好坏的代名词罢了'
}, {
    words: '、当我的巴特农神庙建立起来的时候，我从这遥远的地方也能感受到他的辉煌。'
}, {
    words: '即使没有月亮，心中也是一片皎洁。'
}, {
    words: '黑色是美丽的，他原来是血一般鲜红，蕴含着无穷的炽热，耀眼的光明（煤炭是黑色的，工人的鲜血是鲜红的，所以说黑色是美丽的，对煤炭工人的赞扬，很喜欢）'
}, {
    words: '既不懈的追求生活，又不敢奢望生活过多的报酬和宠爱，而是理智而清醒的面对着现实。'
}, {
    words: '一个平凡而普通的人，时时都会感到被生活的波涛巨浪所淹没。你会被淹没吗？除非你甘心就此而沉沦！！'
}, {
    words: '人的痛苦只能在生活和劳动中慢慢消磨掉，但朋友，没有什么灵丹妙药比得上劳动更能医治人的精神创伤。'
}, {
    words: '命运总是不如人愿。但往往是在无数的痛苦中，在重重的矛盾和艰辛中，才是人成熟起来'
}, {
    words: '权威是用力量和智慧竖立起来的！'
}, {
    words: '他依稀听见一支用口哨吹出的充满活力的歌在若耳边回想。这是赞美青春和生命的歌。'
}, {
    words: '生命里有着多少的无奈和惋惜，又有着怎样的愁苦和感伤？雨浸风蚀的落寞与苍楚一定是水，静静地流过青春奋斗的日子和触摸理想的岁月。'
}, {
    words: '从古到今，人世间有过多少这样的阴差阳错！这类生活悲剧的演出，不能简单地归结为一个人的命运，而常常是当时社会的各种矛盾所造成的。'
}, {
    words: '青春炙热的浆汁停止了喷发，代之而立的是肃穆的山岗！'
}, {
    words: '窗外是太阳永恒的微笑。'
}, {
    words: '她活着了，她一个人痛苦。如果她死了，会给她众多的亲人带去痛苦，于是她就痛苦的活着……'
}, {
    words: '牺牲自己而全力支撑这个穷家，这是他多年类一贯的信念已经成了他生活的哲学。'
}, {
    words: '活着，就要时刻准备承受磨难！'
}, {
    words: '她，不是在举行婚礼。而是她青春的葬礼！'
}, {
    words: '细想过来，每个人的生活也同样是一个世界。即使是最平凡的人，也要为他那个世界的存在儿战斗。'
}, {
    words: '真正的爱情不是利己的，而应该是利他的。'
}, {
    words: '绝不能松紧！他还应该像往常一样，精神抖擞地跳上这辆生活的.马车，坐在驾辕的位置上，绷紧全身的肌肉和神经，吆喝着，呐喊着，继续走向前去。'
}, {
    words: '要知道，春天的道路依然充满泥泞！'
}, {
    words: '生活永远是美好的，人的痛苦却时时在发生……'
}, {
    words: '如果我们是善良的，我们就应该普遍同情所有人的不幸和苦难。'
}, {
    words: '只有劳动才可能使人在生活中强大。不论什么人，最终还是要崇尚那些能用双手创造生活的劳动者。对于这些人来说，孙少平给他们上了生平极为重要的一课——如何对待劳动，这是人生最基本的课题。'
}, {
    words: '人处在一种默默奋斗的状态时，思想就会从生活的琐碎中得到升华。'
}, {
    words: '我认为，每个人都有一个觉醒期，但觉醒的早晚决定个人的命运。'
}, {
    words: '刹那间我真想令时光停住，好让我回顾自己，回顾失去的年华，缅怀哪个穿一身短小的连衣裙和瘦窄的短衫的小女孩……让我追悔少年时代我心灵的愚钝无知，它轻易地错过了我一生中本来可以获得欢乐和幸福！'
}, {
    words: '他相信，自己历经千心万苦而酿造出的生活之蜜，肯定比轻而易举拿来的更有滋味。'
}, {
    words: '他慢慢的懂的，人活着，就是得随时准备经受困难。知道不论是普通人还是了不起的人，都要在自己的一生中经受许多的磨难……'
}, {
    words: '咱们最好各干各的。好朋友自闯江山，不要挤在一块，一个看一个的难过！'
}, {
    words: '永远不要鄙夷我们的出身，她带给我们的财富将使我们一生受用不尽！'
}, {
    words: '生活中真正的勇士向来默默无闻，喧哗不止的永远是自视高贵的一群。'
}, {
    words: '钱当然很重要，这我不是不知道；我一天何尝不为钱而受熬苦！可是，我又觉得，人活这一辈子，还应该有些另外的什么才对……'
}, {
    words: '哭，笑，都是因为欢乐。哭的人知道而笑的人并不知道，这欢乐是多少痛苦所换来的……'
}, {
    words: '人生啊，是这样不可预测，没有永恒的痛苦，也没有永恒的幸福，生活象流水一般，有时是那么平展，有时又是那么曲折。'
}, {
    words: '人的一生中关键的就那么几步，特别是在年轻的时候。'
}, {
    words: '生活包含着更广阔的意义，而不在于我们实际得到了什么；关键是我们的心灵是否充实。'
}, {
    words: '精神上的某种危机，只能靠强度的体力劳动来获得解脱。劳动，永远是他医治精神创伤的良药。'
}, {
    words: '什么是人生？人生就是永不休止的奋斗！只有选定了目标并在奋斗中感到自己的努力没有虚掷，这样的生活才是充实的，精神也会永远年轻！'
}, {
    words: '世界上有些人而感到生活的沉重，也有写人因为先而活得压抑。人啊，都有自己一本难念的经；可是不同苦处的人又很难理解别人的苦处。'
}, {
    words: '不是说农村人就一定干不出什么名堂，主要是精神境界很可能被小农意识的汪洋大海所淹没'
}, {
    words: '如果不能从根本上提高农民的文化素质，即是进行几十年口号式的革命教育也薄脆如纸，封建迷信的复辟就是如此轻而易举。'
}, {
    words: '在这个世界上，不是所有合理的和美好的都能按照自己的愿望存在或实现。'
}, {
    words: '.其实我们每个人的生活都是一个世界，即使最平凡的人也要为他生活的那个世界而奋斗。'
}, {
    words: '人之所以痛苦，在于追求错误的东西。如果你不给自己烦恼，别人也永远不可能给你烦恼。因为你自己的内心，你放不下。好好的管教你自己，不要管别人。'
}, {
    words: '人和社会，一切斗争的总结局也许都是中庸而已。与其认真，不如随便，采菊东篱下，悠然见南山。有钱就寻一醉，无钱就寻一睡，与过无争，随遇而安。'
}, {
    words: '这就是人生的心酸。在我们短促而又漫长的一生中，我们在苦苦地寻找人生的幸福，可幸福往往又与我们失之交臂。当我们为此而耗尽宝贵的青春年华，皱纹也悄悄地爬上了眼角的时候，我们或许才能稍稍懂得生活实际上意味着什么……'
}, {
    words: '他静静地坐在教室里，突然有一个女同学在门口叫他出来一下，是的，是有一个女同学叫他出来一下。他出来了，那个女同学在走廊里对他说：“有一句话，我一直想对你说。十年以后，我们见一次面吧！”那个男的问：“为什么要见面？”“那个女的说，因为我想知道，那个时候你会变成什么样子。这些年来，我一直很喜欢你。”男的问那个女的：“那这些年，你一直怎么没问我呢？”“女的说，呵呵…说了又有什么用，你那么喜欢妮娜。”那个男的怅然若失地问道：“那我们什么时间？在什么地点见面？”“十年以后，五月二十九号晚上八点钟。就在大剧院，那排圆柱正中间的通道里。”“如果那儿的圆柱是单数怎么办？”“那儿有八棵圆柱。如果那个时候，我的外貌变化很大的话……'
}, {
    words: '是啊，这是命运。正如辛劳一年营务的庄稼，还没等收获，就被冰雹打光了，难道能懊悔自己曾经付出的力气吗？'
}, {
    words: '但无论怎样，他还是高兴今天能用他自己劳动赚来的钱，在这里请晓霞吃一顿饭。哪怕他今生一世暗淡无光，可他在自己生命的历程中，仍然还有值得骄傲和怀恋的东西啊！而不至于象一些可怜的乡下人，老了的时候，坐在冬日里冰凉的土炕上，可以回忆和夸耀的仅仅是自己年轻时的饭量和力气……'
}, {
    words: '对于一个有血性的青年来说，自己无力谋生，靠剥夺父亲在这个世界上活着，即便不是堕落，那也实在脸上无光。'
}, {
    words: '只有永不遏制的奋斗，才能使青春之花即便是凋谢，也是壮丽的凋谢！'
}, {
    words: '只要有人的地方，世界就不会是冰冷的！我们可以平凡，但绝对不可以平庸！'
}, {
    words: '人不可能穷一辈子。'
}, {
    words: '山，依然是往日的山，九级古塔没高也没低，依旧巨人一般地耸立在那里。可他心中的山脉和高塔却坠落了，留下的只是一抔黄土和一片瓦砾。但是，爱情将永存。我的亲人，夜已经深了，不知是哪根神经，引进他回到了住宿的地方。城市在熟睡，他醒着，眼前不断闪现的，永远是那张霞光般灿烂的笑脸'
}, {
    words: '你闻闻，空气里有青草和泥土的味道，春天就要来了。'
}, {
    words: '我时常在想：第二天天一亮，一切都是新的。'
}, {
    words: '酷暑已至，常去旁边的冶金学院游泳，晒得快成了黑炭头。时时想念我那“掏碳的男人”。这想念像甘甜的美酒一样令人沉醉。爱情对我来说虽是“初见端倪”，但已使我一洗尘泥，飘飘欲仙了，我放纵我的天性，相信爱情给人创造的力量，我为我的“掏碳丈夫”感到骄傲。是的，真正的爱情不应该是利己的，而应该是利他的是心甘情愿的与爱人一起奋斗并不断的自我更新的的过程；是融合在一起——完全融合在一起的共同奋斗。你有没有决心为他而付出自己的最大牺牲，这是衡量是不是真正爱情的标准，否则就是被自己的感情所欺骗。（田晓霞的日记）'
}, {
    words: '骂人就是骂自己，羞自己，羞自己的祖羞自己的先，羞的先人满坟颠，他先人后悔的没有把“熊”滋到墙上喂苍蝇，生了个他。'
}, {
    words: '晓霞，我的确没有因为无人送行，而怅然若失。对于一个已经闯荡过世界的人来说，我不是刚离巢的小鸟，做第一次飞行。我已经在风雨中有过艰难的行程，内心反而弥散着欢心而温馨的情绪。是的，无论前面等待我的是什么，我总归又踏上了人生新的旅程，去投奔新的生活。'
}, {
    words: '真正的苦，不是累也不是饿，最难熬是心里苦。'
}, {
    words: '什么是社会主义？社会主义不是一个美丽而空洞的口号，也不是意味着贫穷面前人人平等，要穷大家一样穷;社会主义首先应该极大地发展生产力，以此证明自己比别的制度优越;否则，就无力对历史作出回答！'
}, {
    words: ' 过去的感情就像牙齿，掉了就没有了，装上了也是假的。'
}, {
    words: '当一个人集中地凝视着自己的不幸时，他就很难想象别人的苦难。'
}];

 /**
  * forEach+map循环
  * forEach和map的第一个参数是当前元素，第二个是数组下标
  * .join('')的作用是去掉map循环后返回多余的逗号
  */
 loveArr.forEach(e => {
    loveStr += `<div class="row">
                    <li >${e.words}</li>
                    
                </div>`
})

 console.log(loveStr)

 // 拼接完字符串数组后用innerHTML把它渲染到页面中
 document.getElementById("LoveID").innerHTML = loveStr;
