# Sort-QuickSort
write a simple demo about QuickSort algorithm

### 简介

快速排序是 C.R.A.Hoare 于 1962 年提出的一种划分交换排序。它采用了一种分治的策略，通常称其为分治法(Divide-and-ConquerMethod)。

### 分治法的基本思想

分治法的基本思想是：将原问题分解为若干个规模更小但结构与原问题相似的子问题。递归地解这些子问题，然后将这些子问题的解组合为原问题的解。

### 算法思想

1．先从数列中取出一个数作为基准数。

2．分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。

3．再对左右区间重复第二步，直到各区间只有一个数。

### 一些说明

原地排序就是指不申请多余的空间来进行的排序，就是在原来的排序数据中比较和交换的排序。例如快速排序，堆排序等都是原地排序

method1的缺点是，它需要Ω(n)的额外存储空间，也就跟归并排序一样不好。额外需要的存储器空间配置，在实际上的实现，也会极度影响速度和高速缓存的性能。   --摘自维基百科

method2是按照维基百科中的原地(in-place)分区版本，经过验证确实要快很多很多~~~


### 参考文章

[作者很细致的列出了多种实现方式，并说明其区别，点赞！](http://bubkoo.com/2014/01/12/sort-algorithm/quick-sort/)

[一个日本人对算法的图形模拟](http://jsdo.it/norahiko/oxIy/fullscreen)

[一些关于算法的定义balabala的](http://wiki.jikexueyuan.com/project/data-structure-sorting/quick-sort.html)