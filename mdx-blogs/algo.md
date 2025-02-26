# Algorithms

## Time and Space Complexity

- Best Case (Omege Ω) -> Lower Bound.
  - f(n) = Ω(g(n)) => f>=g
- Average Case (theta θ) -> Exact Bound -> Used when for every case there is same value. like linear search is θ(n), but quickSort is O(nlogn)
  - f(n) = θ(g(n)) => f=g
- Worst Case (Big Oh) -> upper Bound (O)

  - f(n) = O(g(n)) => f<=g

- Small o
  - 2n = O(n) ✔
  - 2n = o(n) ❌
  - 2n = o(n^2) ✔
    - Ans is just bigger order of function than O and above.
  - f(n) = o(g(n)) => f<g
- Small Omega (ω)
  - 2n = Ω(n) ✔
  - 2n = ω(n) ❌
  - 2n^2 = ω(n) ✔
    - Ans is just smaller order of function than Ω and below.
  - f(n) = ω(g(n)) => f>g

##### Algebric Properties:

- Reflexive property holds for O, θ, Ω but not for small o and ω.

  - f(n) = O(f(n)), ✔
  - f(n) = θ(f(n)), ✔
  - f(n) = Ω(f(n)), ✔
  - f(n) = o(f(n)), ❌
  - f(n) = ω(f(n)), ❌

- Symmetric property only holds for θ.

  - f(n) = O(g(n)), => g(n) = O(f(n)), ❌
  - f(n) = Ω(g(n)), => f(n) = Ω(g(n)), ❌
  - f(n) = θ(g(n)), => f(n) = θ(g(n)), ✔

- Transitive Property. All Five of them Follows it

  - If f = any_of_five_symbol(g) and g = any_of_five_symbol(h) then f = any_of_five_symbol(h) ✔

- If f(n) = O(g(n)) && h(n) = O(i(n))

  - then, f(n) + h(n) = O(max(g(n), i(n))) ✔
  - then, f(n) * h(n) = O(g(n)*i(n)) ✔

- If f(n) = O(g(n))
  - then, f(n)_h(n) = O(g(n) _ h(n)) ✔

###### order of functions

```cpp
`terms used -> n,logn,log2(n), sqrt(n), n^2`
1 < loglogn < logn < logn^c < n^(1/3) < n^(1/2) < n < nlogn < n^2 < (n^2)logn < n^3 < 2^n < n^n < n!
```

##### Note:

- max global array can be of 10^8 size.
- max stack array that can be created is of 10^6 size otherwise segmentation fault.
- In 1 sec, no of operations done = 2*10^8, but to be on safer side, take it 5*10^7.
- range of int is 10^9.
- range of long long int is 10^18.
- Space complexity counts the stack space used in recursion as well.

| value                   | op  | function order                    |
| ----------------------- | --- | --------------------------------- |
| n < 10                  | =   | n!, n<sup>7</sup>, n<sup>6</sup>  |
| n < 20                  | =   | (2<sup>n</sup>)\*n, n<sup>5</sup> |
| n < 80                  | =   | n<sup>4</sup>                     |
| n < 400                 | =   | n<sup>3</sup>                     |
| n < 7500                | =   | n<sup>2</sup>                     |
| n < 10<sup>5</sup>      | =   | n\*sqrt(n)                        |
| n < 5\*(10<sup>5</sup>) | =   | n\*log(n)                         |
| n < 5\*10<sup>6</sup>   | =   | n                                 |
| n < 10<sup>12</sup>     | =   | sqrt(n), sqrt(n)\*logn            |
| n < 10<sup>18</sup>     | =   | logn, O(1), log2n...              |

## Solving Recurrences:

- Recursion Tree Method.
  - calculate number of functional calls and how much each call costs.
- Substitution Method
- Master Theorem

## Master's Theorem(**Trick**)

`T(n) = aT(n/b) + f(n)`

- where c can be anything [O((n<sup>k</sup>)*(log<sup>p</sup>(n)))]
- and f(n) is a Polynomial Function. means not like n/logn.
- a should be >=1
- **Steps:**

  - calculate n<sup>log_a[base_b]</sup>
  - if it is same as f(n) then return `f(n)*logn`
  - else return bigger of them.

- Special Cases
  - if f(n) = 2^n, Complexity is O(2^n)
  - if f(n) = n!, Complexity is O(n!)

#### Extended Masters Theorem

- Google it, No need to learn it!

## Stabilty & Inplace (Sorting)

- elements in new array appears in same order as they were in original.

- **Stable Sort** (if `clubs of 5` is first in input than `heart of 5` then the order is maintained in output as well and is not by chance but by sureity.)

  - **Bubble Sort**, O(n^2)
    - optimized Bubble Sort(isSwapped flag)
    - `Best case complexity O(n)`)
    - `Inplace`
  - **Insertion Sort** O(n^2)
    -(`Best case complexity O(n)`)
    - (`Inplace`)
    - If Array is sorted or almost sorted, insertion sort is best as number of swaps and comparisons will be less.
  - **Selection Sort** O(n^2)
    - (`Inplace`)
    - (`all case O(n^2)`)
  - **Merge Sort**, O(nlogn)
    - (Divide and Conquer Algorithm),
    - (`O(nlogn) in time and O(n) in space`)
    - (`Not Inplace`)
    - used in _External Merge Sorting_ [no need to bring complete array at a time to sort, can divide array into chunks that can fit into RAM, and sort individually][k-way merge is performed here.] [merging k sorted arrays in one go.][merge sort uses 2-way merge]
  - **Quick Sort** O(nlogn)
    - (Divide and Conquer Algorithm),
    - Inplace, if no stack space is considered as used in recursion, otherwise not-inplace.
    - `Stable`, as in partition function, the same elements(If a1,a2; a1==a2 is the order) then if a1 is swapped comparing with pivot, then a2 will also be swapped with pivot and since a1 comes first, swapped first => placed first and before a2.
    - In worst case call stack can take upto to n calls, quicksort is O(n) space wise. `conclusion: space is O(n)`, because of stack space.
    - Tail recursive hence is more optimizated for complier as compiler can do tail call elimination and perform code optimization.
    - Worst case: Array already sorted and we are taking pivot as the first element.
      - T(n) = T(n-1)+n = O(n^2)
    - Best case: when pivot always lends in the middle.
      - T(n) = 2T(n/2)+n = O(nlgn)
    - Almost best/worst case or rest of the cases:
      - Let partition happens like n/10 and 9n/10 [10% and 90% split].
      - T(n) = T(n/10)+T(9n/10)+n
      - Solvin gby recursion tree we get T(n)= O(n\*logn) [logn with base 10/9].
      - **Important**: `Only in one case Quicksort goes to n^2`.
      - `Even if we have n/100 and 99n/100 [1% and 99% split]split. It will still be nlogn.`
    - Worst case O(n^2), chance of happening that case can be reduced using randomized QuickSort.
      - Randomization can be added in picking the pivot element rather than first everytime.
      - Other can be randomly shuffle the input array. chance of array remains sorted is close to 0 after the shuffling.
      - but since there still a very very small chance of happening the scenario. Worst case remains O(n^2) but now with lower probability.
  - **Counting Sort**
    - O( n + range_of_numbers), made stable by keeping cummulative count of elements <= the ith element in original array.
    - **not a comparison based**, **not inplace**, extra O(n+k) space, k for counting occurences and n for output array which will then be copied to original array.
    - useful only when k(range of numbers) is linear to n(n/2, 2n, 5), otherwise counting sort becomes n^2 or worst depending upon k=n^2 or n^3.
    - used as a subroutine for radix sort.
    - both space and time complexity is O(n+k)
  - **Radix Sort**
    - works even when range of numbers is very large.
    - works in linear time, even when numbers are in range(n^2, n^3).
    - use counting sort as subroutine.
    - `O(d*(n+k))`, d is number of digits in largest number, k is biggest digit in numbers(base of numbers, k=b)(usually 10[decimal] so can be ignored), `O(d*n)`.
    - space is same as of counting sort. O(n+k) and k=b
    - Question: -What is the Time Compexity to sort n integers using radix sort in range [n^(k/2), n^k]. where k is independent of n.
      - Ans: T(n) in radix sort is = O(d\*(n+range)),
      - range = 10(decimal number system)
      - d = log(n^k) = number of digits in the largest number.
      - T(n) = O( k _ logn _ n) = O(nlogn)

- **Unstable Sort**

  - **Heap Sort**
    - θ(nlogn) in all cases (best, worst, average)
    - There is one case where it is O(n), when almost-all or all elements are same, heapify becomes O(1), hence O(n).
    - Space complexity is O(1)
  - **Bucket Sort**
    - O(n) best case, O(used_sort_algo_time_to sort_individual_bucket)

- Insertion Vs Selection Sort

  - Insertion is O(n^2) swaps in worst case
  - Selection is O(n) swaps in worst case
  - use selection sort where writing to memory(swaps) is a concern over insertion sort.

- Question : can there be nay comparison based sorting algorithm which is O(n)?.

  - Ans: No, Since we have to make comparisons and total number of arrangement possible is n!, we make binary decision tree of elements where leaf nodes are all the n! arrangements. Binary tree of height h has 2^h-1 nodes. and 2^(h-1) leaf nodes.
  - Since not all arrangement will arrive at same height. leaf nodes are less than n! =>
    n! <= 2^(h-1)  
    => log(n!) <= h-1
    => h >= log(n!)+1
    => h = θ(nlogn) [as log(n!) = θ(nlogn)]
    => we can say h = Ω(nlogn)
    - Since to sort the array, we atleast have to follow one path down the deicison tree, total Comparisons are atleast h = nlogn.
    - Note: Minimum Number of comparion to sort array based on comparison based sorting is ceil(lg(n!)), ceil because of h >= log(n!)+1.

- Prove [as log(n!) = θ(nlogn)]
  - Proof:
    - log(n!) = log1 + log2 + logn3 + ... + log(n/2) + ... + logn <= logn + logn + logn + ... + logn = nlogn
      - => log(n!) = O(nlogn)
    - log(n!) = log1 + log2 + logn3 + ... + log(n/2) + ... + logn >= log(n/2) + log(n/2+1) + log(n/2+2) + ... + log(n) = (n/2)log(n/2)
      - => log(n!) = (Ω(nlogn)
    - => log(n!) = θ(nlogn) Proved.

## Binary Search

- Binary Search only works on sorted array.(monotonic functions)
- Binary Search does not work on sorted linked list beacuse getting the middle element will take O(n) in itself..

## Stack(infix prefix algo and points)

- `Advantage of prefix and postfix expressions`

  - can be easily evaluated by writing a program that traverses the given (prefix/postfix)expression exactly once using stack.
  - Don't requires parenthesis, precedence rules, associativity rules.

- `Infix to postfix algo`
- If current element is of higher precedence(heavy one), push to stack
- If current element is of lower precedence (light one), pop till current element becomes heavy.
- Note: we are comparing curernt element with top of stack for precedence.
- In evaluating postfix expression for integer result, first popped element will be the second operand and second popped element will be the first operand.

- `Infix to prefix algo`

  - just traverse the infux string from reverse and return the reverse of what you get, rest algo is same as above.
  - In evaluating prefix expression for integer result, first popped element will be the first operand and second popped element will be the second operand(opposite of postfix).

- Conclusion:
  - bhari hai toh stack mai daldo, bina kuch kiye.😁
  - halka hai toh pop karte raho jab tak wo halka bhari na hojaye.😁

## Tree

- height 0 is root=NULL
- height starts from 1, level from 1, depth from 0 (follow this convention) => Level starts from 1, height of tree is the maximum level, depth of node is always level of node - 1
- depth starts from top. root's depth 0, root-children depth 1 and so on..
- depth is number of edges between root to that node.
- internal node = nodes that are not leaf nodes.; root is also an internal node.
- Tree problems follows recursive structure. Mostly all the problems can be solved by dividing the problems in subproblems and making recursive calls on subtrees.
- Types of binary tree
  - full binary tree : every node with 0 or 2 children; need not to be balanced.
    ```cpp
    <!-- EXAMPLE -->
      O
    /   \
    O    O
        /  \
       O    O
            / \
           O   O
              /  \
              O   O
    ```
  - complete binary tree(CBT)
    - except last level,rest level are completely filled
    - last level has node from Left to Right. No Gaps
    - number of internal nodes in CBT is floor(n/2)
      ```cpp
      <!-- EXAMPLE -->
            O
          /   \
          O     O
        / \    /
        O  O   O
      ```
  - perfect binary tree
    - Every level is completely filled.
    - or say every internal node has 2 children and all leaves node are at same level.
      ```cpp
          <!-- EXAMPLE -->
              O
            /   \
            O     O
          / \    / \
          O  O   O  O
      ```
  - balanced binary tree
    - every nodes left Subtree height and right Subtree height differnence is not more than 1.

## Hashing , HashFunction(hf), Load Factor and Hash Table

- To analyse the searching time, we use Load Factor, which is [(total Slots filled)/(total Slots)] = Average number of keys per slot. = Average length of chain per slot.
- Simple Uniform hashing follows, for each key, it is equally likely to be hashed to any slot in table. And it is a requirement for good hash function.
- To avoid many collisions, we always make sure load factor<=1, generally 0.7, when it grows more, we create new table of twice the size and reduce load factor again.
- Average number of comparions to be performed to search a key = average chain length = Load Factor
- Coliisions are also called `Probes`.

- Collisions are resolved by :-
  - Open Addressing or Closed hashing
    - Linear Probing (hf_i(n) = (hf(n) + i) mod m); [hf_i being calculating hf ith time; m is table size]
      - Side Effect of Linear Probing: Produces `Primary Clustering`
      - Primary Clustering: - In case of Linear Probing, If two keys are mapped to same starting location in a hash table then both follows the same path unnecessarilly in a linear fashion as a result of which search time increases. To avoid this problem, we use Quadratic Probing.
      - Time for succesfull search = (1/LF)\*ln(1/(1-LF)) on an average.
      - Time for unsuccesfull search = 1/(1-LF) on an average.
    - Quadratic Probing (hf_i(n) = (hf(n) + a*i*i + b\*i)) mod m, typically a=1 & b=0
      - Side Effect of Quadratic Probing: Produces `Secondary Clustering`
      - Secondary Clustering: - In case of Linear Probing, If two keys are mapped to same starting location in a hash table then both follows the same path unnecessarilly in a linear fashion as a result of which search time increases. To avoid this problem, we use Double hashing.
    - Double Hashing (hf_i(n) = (hf(n) + i\*hf2(n)) mod m)
    - Secondary Clustering
  - Open Hashing or Seperate chaining
    - Time for succesfull search = 1 + LF/2 on an average.
    - Time for unsuccesfull search = 1 + LF on an average.
    - Slots means table size.

## Graph Data Structure

- G = (V,E)
- Directed(ordered edge pair) vs Undirected(unordered edge pair)
- Weighted vs unweighted
- **Path**
  - A physical link and repeting the link is not a concept
  - v1, v2, v3, v5, v4 is a path.(No repetition)
  - v1, v2, v3, v5, v1, v2 is not a path.
- **Walk**
  - We can walk along the path & can repeat the path while walking
  - v1, v2, v3, v5, v4 is also a walk.
  - v1, v2, v3, v5, v1, v2 is a walk.
- **Bridge or cut edge or cut-arcs**
  - An edge removal of which increases the number of connected components in a graph.
  - or edge removal of which graph becomes disconnected.
- **Articulation Point or cut vertices**
  - Vertex removal of which disconnects the connected graph is called cut vertex.
  - vertex removal of which increases the number of connected components in a graph.
- **Biconnected Graph**
  - IF removal of any one vertex doesn't disconect the graph, graph is called biconnected(connected through 2 ways).
- Tree is an acyclic connected Graph.
- If a graph is connected then

  - minimum no. of edges = n-1 = Tree
  - maximum no. of edges = nC2 in undirected, 2\*nC2 in directed.

- **Graph Representations**

  - _Adjacency Matrix_
    - Space: O(V\*V)
    - Operations:
      - Check if u and v are adjacent is O(1).
      - Finding vertices adjacent to u is O(V).
      - Finding degree of u is O(V).
      - Add/Delete an edge is O(1)
  - _Adjacency List_
    - Space: O(V+E) <!-- V for array size and E for total list size in chaining -->
    - can be implemented using dynamic size 2D-array or linked list.
    - Operations:
      - Check if u and v are adjacent is O(V).
      - Finding vertices adjacent to u is O(degree(u)).
      - Finding degree of u is O(1) `as internal arrays size is stored in v.size()`.
      - Add/Delete an edge is O(1).
    - Example
      - `vector<int> adjList[V]` (array of vectors).
      - or `unordered_map<int> adjList[V]` (array of hashmaps).
      - or `vector<vector<int> > v` (vector of vectors).
      - or `vector<list<int> > v` (vector of list).
      - or `unordered_map<vector<int> > v` (hashmap of vectors).
      - or `unordered_map<list<int> > v` (hashmap of lists).
  - _Edge List_
    - Used when we required sorting based on edge weights like in Finding MST
    - [(0,3), (0,2),(1,4),(2,4)]
    - list/vector/array of pair(src, dest)
    - list/vector/array of triplet(weight, src,dest)
  - _Implicit Graph_

    - Graph given in form of 2d Matrix where there is 4 way connectivity(movement can be top,right,down,left) or 8-way connectivity(All 8 directions to move).
    - FloodFill Algorithm

  - Adjacency list are far more suited than Adjacency matrix as most of the scenarios have sparse graphs in real life.
  - **Handling vertices with value other than integer like strings as the name of city.**
    - We store the city name and a index in hashmap. (So that finding the index of a city is constant)
    - along with index and city name in array.(So that finding city from index is constant)
  - We need to mark things visited, so that next time if we come back to the same thing we know that we already came there once.

- **BFS**

  - helps in finding the shortest path b/w u and v in an `unweighted` Graph(Single Source Shortest Path, SSSP).
  - Works in both directed and undirected graphs.
    - Shortest path b/w u and v in an weighted Graph is done using dijikstra, which is similar to BFS, it is just that it uses priority queue rather than a queue to find the shortest path.

- **Cycle Detection can be done using BFS or DFS**.

  - (`In undirected graphs`):how? check for any vertex, if the adjacent vertices are already visited or not but ignoring the parent vertex.
    - can be done by BFS or DFS.
    - `Conclusion: check for vertices visitation except the parent one.`
  - how? (`In directed graphs`):
    - directed algo (previous point) fails for `3-->1<--2` graph.(for loop will go to 1 then 2 then 3).
    - using DFS: we look for the backedge, means while doing DFS we check if adjacent vertex is already available in recursion stack or not (maintains an boolean array for what we have pushed to stack till now)(or we can use visited array for same, 0 means not visited, 1 means visited but not in stack, 2 means visited and in stack).
    - `Conclusion: check for backedge,i.e. Is vertex already in recursion-stack?`
    - same can also work in undirected graphs(above case.) But Leave parent vertex as well ofcourse.
    - using BFS: `TODO`

- **Bipartite Graph?**

  - We can divide all vertices in two sets such that all edges of the graph are from one set to another set.
  - Either we can chenck for odd-length cycle
  - Or we color nodes and see violation occurs

- **Topological sorting (DFS)**

  - Works for DAG
  - Done via BFS(Kahn's Algorithm) - remove the node with indegree 0. keep doing it.
  - Done via DFS - Save the nodes when none of its neighours remained to be visited. print output in reverse order.
    - can save in a list and use push_front to save the node(basically appendToHead). and then print list.
    - can save it in stack as then print the stack.

- **Strongly Connected Digraphs(Connectivity in Directed Graph)**

  - Directed graph are strong connected if there exist a **directed path** b/w each pair of vertices.
  - And components which are strongly connected are called Strongly connected Components of Grpah.

- **Weakly Connected Graph**

  - Directed Graph which is not strongly connected, But If we remove the direction of edges and it becomes Connected graph. then it is weakly connected.

- **Spanning Tree**

  - concept for undirected Graphs only. Is it ?
  - A graph can have multiple spanning trees
  - A graph can have multiple Minimum spanning trees but of equal lengths. because of minimum
    - An unweighted graph(w=1 for every edge) has multiple MSTs of length #nodes-1

- **MST**

  - Prims and Kruskal's Algorithms
  - `Kruskal's Algorithms (For Undirected Graph)`
    - Greedy Algo, `Complexity O(E*logE)` ; as E = V^2 => logE = 2LogV => `Complexity O(ElogV)`
    - It Pick Edges one by one
    - Uses `Union Find` Data structure (DSU : Disjoint Set Union)
    - `Sorts edges` in non-decreasing order by weight
    - Pick the edge(u---> v) if it is not forming a cycle. i.e u and v belongs to different sets.
  - `Prim's Algorithm (For Undirected Graphs)` O(ElogV)
    - Used Min Heap.
    - Also a Greedy Approach.
    - It Pick Vertices one by one.and update the neighbour distance if distance is less than already assigned. Intitally all are infinity.

- **DSU**

  - Find and Union with optimization
    - Path Compression
    - Union By rank

- **Properties of Spanning trees(ST)**

  - #edges in MST = V-1.
  - Spanning Trees is maximally acyclic => If we add one more edge to ST, graph will have cycle.
  - Spanning Trees is minimally connected => If we remove one edge from ST, graph will become disconnected.
  - There may exist many ST of same weight.
  - If each edge has distinct weight, then we will have exactly one unique MST.
  - Cycle Property: For any Cycle C in a graph, if the edge weight is larger than all other edges in C. Then that edge cannot be a part of MST.
  - Min-cost-edge : If the minimum weightde edge in Graph is Unique, Then it will always belong to MST.

- **Shortest Distance**
  - Dijikstra
  - Bellmon ford
  - Floyd Warshall

## Backtracking

- Used for Constrained Assignement problems like N-Queen, Rat in a maze, Sudoku Solver.
- In these problems brute force solution tries all possible combinations and hence high in complexities
- But backtacking is beign smart about trying the combinations. If while following one of the combination, we find out that it is going to invalid, we simply reject that path, go back and try new path. (Hence not going blindly in one direction, saving lot of time.)

## DP

- Exhaustively searching all possible paths but also saving common subpaths in between and not going to same path again.

## Greedy

- Going toward the local optimal solution which will eventually result into global optimal solution.
- Not possible for every real world problem.
- Fractional Knapsack
  - Sort by val/wt => value of 1kg of item.
- Huffman Coding
  - Start making the tree taking 2 least frequent characters.
- Job Sequence with Deadlines
- Optimal Merge Pattern
  - Merging n-sorted arrays
    - Two ways
    - 1. Perform n-way merge
    - 2. Perform multiple 2-way merge(in total n-1 2-way merges) (here comes optimal merge pattern problem)
      - What is the minimum no of operations required to perform multiple 2-way merges of n sorted arrays.
      - seems like matrix Chain multiplication problem of DP
      - But since cost of merging is simply sum of lemgth of arrays.(n1+n2). We can do it greedily.
      - By Picking 2 smallest array and 2-way merge them everytime.
- Prim's Algo for MST
- Krushkal's Algo for MST

## Interactive Problems

- Problems in which our solution deals/interact/talk with the online-judge/problem-grader.
- It requires to flush the output as soon as we want to print something on screen.
- Generally, People uses ios::base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL); Which leads to storing the output in buffer and outputing on screen all together when program terminates.
- It is fine for other problems which are not interacting with the judge. As this flushing in the end make our program faster.
- But in Interactive problems we want to flush things. Hence we use `cout<<flush`; or `cout<<endl;` as `cout<<'\n'<<flush is equivallent to cout<<endl`;
- That's why in other problems we uses '\n' instead of endl;
- But here we need to use endl.
- Conclusion : use endl instead of '\n' here.

- Links:
  - www.codeforces.com/gym/101021/problem/1/
  - www.codeforces.com/problemset/problem/1167/B/
  - www.codeforces.com/problemset/problem/1207/E/

## Policy Based Datastructures

- Declaration, namespace, Headers, typedef for easier use

  ```cpp
    #include <ext/pb_ds/assoc_container.hpp>
    #include <ext/pb_ds/trie_policy.hpp>
    using namespace __gnu_pbds;
    typedef tree<int, null_type, less<int>, rb_tree_tag, tree_order_statistics_node_update> pbds;
  ```

- Working & Important Function

  - It works like a ordered set +
  - a function to return kth smallest element. `find_by_order(k)` [O(logn) time] +
  - a function to find #elements less than k. `order_of_key(k)` [O(logn) time].

- code

```cpp
  pbds s;
  // insert in any order- stored always in sorted order.(rb tree)
  s.insert(6);
  s.insert(5);
  s.insert(1);
  s.insert(3);
  s.insert(10);
  s.insert(10); // No duplicates are added.

  // cannot iterate over set this way.
  // but can do with pbds
  for (int i = 0; i < s.size(); i++) {
    auto it = s.find_by_order(i); // finding ith smallest element.
    cout << *it << " ";
  }
  // above output: 1 3 5 6 10
  cout << endl;

  for (int i = 0; i < 10; i++) {
    auto order = s.order_of_key(i); // finding ith smallest element.
    cout << order << " ";
  }
  // above output: 0 0 1 1 2 2 3 4 4 4 : - #elements smaller than index
  cout << endl;
```

- Question : Inversion count

  ```cpp
    int n;
    cin>>n;
    int arr[n];

    for(int i=0; i<n;i++){
      cin>>arr[i];
    }

    int count = 0;
    for(int i=0; i<n;i++){
      count += St.size() - St.order_of_key(a[i]);
      St.insert(a[i]);
    }

    cout<<count<<endl;

  ```

## LRU Cache

- One of the Page Replacement Strategies/Algo.
- Page fault occurs in Virtual memory concept due to lack of availibilty of frames in main memory.

- Others are: FIFO, LFU, Optimal
-

## Questions:

- Look for circular Queue, rear, front, emoyt or full conditions.I don't get those.
- Is it true?, I think so
  - we cannot remove a specific element from heap. can always only remove min only if it is a minheap?
  - If we want sorted order and also want to remove specifc element in future. we should use set.
